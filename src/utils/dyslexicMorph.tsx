import React, { useState, useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';

// ─── Letter Database ──────────────────────────────────────────────────────────
// One-to-one pairs only. Capital letters are never touched.

const LETTER_PAIR: Record<string, string> = {
  b: 'd', d: 'b',
  p: 'q', q: 'p',
  n: 'u', u: 'n',
  m: 'w', w: 'm',
};

const TICK_MS = 80;

// ─── Types ────────────────────────────────────────────────────────────────────

interface CharState {
  display: string;    // what's shown in the DOM right now
  original: string;  // never changes
  target: string;    // where this roll is heading
  rollPool: string[]; // remaining frames before landing on target
  glitching: boolean;
}

type CharGrid = CharState[][];

// ─── Core Algorithm ───────────────────────────────────────────────────────────

// Generates a morphed version of a word.
// - Uppercase letters, digits, punctuation: stay at their exact positions, unchanged.
// - Lowercase letters:
//   1. Each may be confusable-swapped with its pair (~50% chance per letter)
//   2. All lowercase positions are shuffled among themselves (includes substituted ones)
// Word length never changes.
function morphWord(original: string): string {
  const chars = [...original];
  const lowerIdx = chars
    .map((c, i) => (/[a-z]/.test(c) ? i : -1))
    .filter((i) => i !== -1);

  if (lowerIdx.length < 1) return original;

  // Step 1: confusable substitutions
  for (const i of lowerIdx) {
    if (LETTER_PAIR[chars[i]] && Math.random() < 0.5) {
      chars[i] = LETTER_PAIR[chars[i]];
    }
  }

  // Step 2: shuffle lowercase positions (Fisher-Yates)
  if (lowerIdx.length >= 2) {
    const lowerChars = lowerIdx.map((i) => chars[i]);
    for (let i = lowerChars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lowerChars[i], lowerChars[j]] = [lowerChars[j], lowerChars[i]];
    }
    lowerIdx.forEach((idx, i) => {
      chars[idx] = lowerChars[i];
    });
  }

  return chars.join('');
}

// Builds the intermediate frames for the airport-board rolling effect.
// For a confusable pair (b↔d, etc.): alternates between the two chars before landing.
// For a position swap: quick 2-frame roll using the from-char's pair as a mid-point.
function buildRollPool(from: string, to: string): string[] {
  if (from === to) return [];
  const isPair = LETTER_PAIR[from] === to || LETTER_PAIR[to] === from;
  if (isPair) {
    return [to, from, to, from, to]; // flicker between mirrors
  }
  const mid = LETTER_PAIR[from] ?? LETTER_PAIR[to] ?? from;
  return [mid, to];
}

// ─── Scheduler ────────────────────────────────────────────────────────────────

function scheduleWordMorph(
  wi: number,
  originalWord: string,
  charGridRef: React.MutableRefObject<CharGrid>,
  timersRef: React.MutableRefObject<ReturnType<typeof setTimeout>[]>,
  morphsLeft: number
): void {
  const delay = 500 + Math.random() * 1000;

  const t1 = setTimeout(() => {
    const word = charGridRef.current[wi];
    if (!word) return;

    const currentDisplayStr = word.map((c) => c.display).join('');
    const returningToOriginal = morphsLeft <= 0;

    let newWord: string;
    let nextMorphsLeft: number;

    if (returningToOriginal) {
      newWord = originalWord;
      nextMorphsLeft = 2 + Math.floor(Math.random() * 4); // 2–5 random morphs before next return
    } else {
      newWord = morphWord(originalWord);
      for (let attempt = 0; attempt < 6 && newWord === currentDisplayStr; attempt++) {
        newWord = morphWord(originalWord);
      }
      nextMorphsLeft = morphsLeft - 1;
    }

    // Start rolling for every position that changed
    charGridRef.current = charGridRef.current.map((w, i) => {
      if (i !== wi) return w;
      return w.map((c, ci): CharState => {
        const newChar = newWord[ci] ?? c.original;
        const pool = buildRollPool(c.display, newChar);
        if (pool.length === 0) return c;
        return { ...c, target: newChar, rollPool: pool, glitching: true };
      });
    });

    // Max pool length is 5 frames → 400ms roll, then hold, then next morph
    const rollDuration = 5 * TICK_MS + 50;
    // Hold longer at original so the reader can register the correct word
    const hold = returningToOriginal
      ? 900 + Math.random() * 900
      : 300 + Math.random() * 700;

    const t2 = setTimeout(() => {
      scheduleWordMorph(wi, originalWord, charGridRef, timersRef, nextMorphsLeft);
    }, rollDuration + hold);
    timersRef.current.push(t2);
  }, delay);

  timersRef.current.push(t1);
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

function useDyslexicMorph(text: string): CharGrid {
  const charGridRef = useRef<CharGrid>([]);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [, setRenderTick] = useState(0);

  // Reset grid and restart schedulers whenever text changes
  useEffect(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    const words = text.split(' ');
    charGridRef.current = words.map((word) =>
      word.split('').map((ch): CharState => ({
        display: ch,
        original: ch,
        target: ch,
        rollPool: [],
        glitching: false,
      }))
    );

    words.forEach((word, wi) => {
      const lowerChars = [...word].filter((c) => /[a-z]/.test(c));
      const hasPair = lowerChars.some((c) => !!LETTER_PAIR[c]);
      const canShuffle = lowerChars.length >= 2;
      if (!hasPair && !canShuffle) return;

      const stagger = Math.random() * 1000;
      const initialMorphsLeft = 2 + Math.floor(Math.random() * 4);
      const t = setTimeout(
        () => scheduleWordMorph(wi, word, charGridRef, timersRef, initialMorphsLeft),
        stagger
      );
      timersRef.current.push(t);
    });

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [text]);

  // Single shared tick — created once, never torn down
  useEffect(() => {
    const interval = setInterval(() => {
      let anyChanged = false;

      const nextGrid = charGridRef.current.map((word) => {
        const nextWord = word.map((char): CharState => {
          if (char.rollPool.length === 0) return char;
          anyChanged = true;

          const [next, ...remaining] = char.rollPool;
          if (remaining.length === 0) {
            return { ...char, display: char.target, rollPool: [], glitching: false };
          }
          return { ...char, display: next, rollPool: remaining, glitching: true };
        });
        // Preserve array reference for unchanged words (React.memo optimization)
        return nextWord.every((c, i) => c === word[i]) ? word : nextWord;
      });

      charGridRef.current = nextGrid;
      if (anyChanged) setRenderTick((t) => t + 1);
    }, TICK_MS);

    return () => clearInterval(interval);
  }, []);

  return charGridRef.current;
}

// ─── Render Components ────────────────────────────────────────────────────────

const CharSpan = React.memo(({ char }: { char: CharState }) => (
  <motion.span
    animate={{ opacity: char.glitching ? 0.6 : 1 }}
    transition={{ duration: 0.05 }}
    style={{ display: 'inline-block' }}
  >
    {char.display}
  </motion.span>
));
CharSpan.displayName = 'CharSpan';

const WordSpan = React.memo(({ chars }: { chars: CharState[] }) => (
  <span style={{ display: 'inline-block' }}>
    {chars.map((c, ci) => (
      <CharSpan key={ci} char={c} />
    ))}
  </span>
));
WordSpan.displayName = 'WordSpan';

// ─── Public API ───────────────────────────────────────────────────────────────

export interface DyslexicTextProps {
  text: string;
  style?: CSSProperties;
  className?: string;
}

// Pass any text string. Capital letters are never morphed.
// Spaces are rendered outside WordSpan so line-wrapping works normally.
export const DyslexicText: React.FC<DyslexicTextProps> = ({ text, style, className }) => {
  const charGrid = useDyslexicMorph(text);

  return (
    <span className={className} style={style} aria-label={text} aria-live="off">
      {charGrid.map((wordChars, wi) => (
        <React.Fragment key={wi}>
          <WordSpan chars={wordChars} />
          {wi < charGrid.length - 1 && <span> </span>}
        </React.Fragment>
      ))}
    </span>
  );
};
