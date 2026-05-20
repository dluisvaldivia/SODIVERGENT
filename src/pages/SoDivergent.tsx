import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import bgTexture from '../assets/crumpled-beige-paper-texture.jpg';

// ─── Types ───────────────────────────────────────────────────────────────────

interface ThoughtBubble {
  id: number;
  x: number;
  y: number;
  text: string;
}

interface WordState {
  original: string;
  current: string;
  scrambled: boolean;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function scrambleWord(word: string): string {
  const match = word.match(/^([^a-zA-Z]*)([a-zA-Z]+)([^a-zA-Z]*)$/);
  if (!match || match[2].length < 3) return word;
  const [, pre, core, post] = match;
  const chars = core.split('');
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return pre + chars.join('') + post;
}

// ─── HeroSection ─────────────────────────────────────────────────────────────

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const activeLang = i18n.language?.slice(0, 2) || 'en';

  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'rgba(240, 238, 233, 0.55)' }}
    >
      {/* Language switcher */}
      <div className="absolute top-6 right-8 flex gap-4 z-10">
        {(['en', 'es', 'fr'] as const).map((lang) => (
          <button
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: activeLang === lang ? 700 : 300,
              opacity: activeLang === lang ? 1 : 0.4,
              padding: '0.25rem 0.25rem',
              transition: 'opacity 0.2s, font-weight 0.2s',
              color: '#4a3f36',
            }}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Hero title */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          lineHeight: 1,
          color: '#4a3f36',
          fontFamily: 'Lexend, sans-serif',
          userSelect: 'none',
        }}
      >
        {t('sodivergent.hero_title')}
      </motion.h1>
    </section>
  );
};

// ─── AlwaysThinkingSection ────────────────────────────────────────────────────

const AlwaysThinkingSection: React.FC = () => {
  const { t } = useTranslation();
  const [thoughts, setThoughts] = useState<ThoughtBubble[]>([]);
  const lastThoughtTime = useRef<number>(0);
  const nextCooldown = useRef<number>(1200);
  const sectionRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastThoughtTime.current < nextCooldown.current) return;

    lastThoughtTime.current = now;
    nextCooldown.current = 1000 + Math.random() * 1500;

    const rect = sectionRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rawThoughts = t('sodivergent.always_thinking_thoughts', { returnObjects: true });
    const thoughtsList: string[] = Array.isArray(rawThoughts) ? rawThoughts : [];
    if (thoughtsList.length === 0) return;

    const text = thoughtsList[Math.floor(Math.random() * thoughtsList.length)];
    const id = idCounter.current++;

    setThoughts((prev) => [...prev, { id, x, y, text }]);

    setTimeout(() => {
      setThoughts((prev) => prev.filter((th) => th.id !== id));
    }, 2500);
  }, [t]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'rgba(240, 238, 233, 0.65)', cursor: 'pointer' }}
    >
      <AnimatePresence>
        {thoughts.map((thought) => (
          <motion.div
            key={thought.id}
            initial={{ opacity: 0, y: 0, scale: 0.85 }}
            animate={{ opacity: 1, y: -30, scale: 1 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: thought.x,
              top: thought.y,
              transform: 'translate(-50%, -100%)',
              pointerEvents: 'none',
              background: 'rgba(255, 255, 255, 0.88)',
              border: '1px solid rgba(74, 63, 54, 0.18)',
              borderRadius: '1rem',
              padding: '0.45rem 1rem',
              fontSize: '0.95rem',
              fontStyle: 'italic',
              whiteSpace: 'nowrap',
              color: '#4a3f36',
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
              zIndex: 10,
            }}
          >
            {thought.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Subtle section hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.6, duration: 1 }}
        style={{
          fontSize: '0.9rem',
          fontStyle: 'italic',
          color: '#4a3f36',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '0.04em',
        }}
      >
        …
      </motion.p>
    </section>
  );
};

// ─── CantGetStartedSection (Slow Scroll) ──────────────────────────────────────

const CantGetStartedSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isActive = useRef(false);
  const [visibleLines, setVisibleLines] = useState<number>(0);

  const lines = [
    t('sodivergent.cant_start_prompt_line_1') || 'THIS IS',
    t('sodivergent.cant_start_prompt_line_2') || 'WHAT TRYING TO DO SOMETHING',
    t('sodivergent.cant_start_prompt_line_3') || 'THAT SHOULD COME NATURALLY',
    t('sodivergent.cant_start_prompt_line_4') || 'FEELS LIKE',
    t('sodivergent.cant_start_prompt_line_5') || 'WHEN YOUR MIND JUST WONT LISTEN',
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isActive.current = entry.isIntersecting && entry.intersectionRatio > 0.4;
      },
      { threshold: [0, 0.4, 0.6, 1] }
    );
    observer.observe(section);

    const handleWheel = (e: WheelEvent) => {
      if (!isActive.current) return;
      e.preventDefault();
      window.scrollBy({ top: e.deltaY * 0.15, behavior: 'instant' as ScrollBehavior });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    if (!isActive.current) return;

    let lineIndex = 0;
    const intervals: ReturnType<typeof setInterval>[] = [];

    const showNextLine = () => {
      if (lineIndex < lines.length) {
        setVisibleLines(lineIndex + 1);
        lineIndex++;
        const nextDelay = 1200 + Math.random() * 800;
        intervals.push(setTimeout(showNextLine, nextDelay));
      }
    };

    const initialDelay = setTimeout(showNextLine, 600);
    intervals.push(initialDelay);

    return () => intervals.forEach(clearTimeout);
  }, [isActive.current, lines.length]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'rgba(240, 238, 233, 0.72)' }}
    >
      <div
        style={{
          maxWidth: '640px',
          textAlign: 'center',
          padding: '2rem',
          height: '320px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {lines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            animate={
              idx < visibleLines
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 60 }
            }
            transition={{ duration: 1.4, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              fontWeight: 700,
              color: '#4a3f36',
              lineHeight: 1.6,
              letterSpacing: '0.02em',
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ─── DyslexicSection ─────────────────────────────────────────────────────────

const DyslexicSection: React.FC = () => {
  const { t } = useTranslation();
  const paragraphText = t('sodivergent.dyslexic_text');

  const [wordStates, setWordStates] = useState<WordState[]>(() =>
    paragraphText.split(' ').map((w) => ({ original: w, current: w, scrambled: false }))
  );

  useEffect(() => {
    const words = paragraphText.split(' ');
    setWordStates(words.map((w) => ({ original: w, current: w, scrambled: false })));

    const timers: ReturnType<typeof setTimeout>[] = [];

    const scheduleNext = (index: number, word: string) => {
      if (word.replace(/[^a-zA-Z]/g, '').length < 3) return;

      const delay = 3000 + Math.random() * 5000;
      const t1 = setTimeout(() => {
        setWordStates((prev) => {
          const next = [...prev];
          next[index] = { ...next[index], current: scrambleWord(next[index].original), scrambled: true };
          return next;
        });

        const t2 = setTimeout(() => {
          setWordStates((prev) => {
            const next = [...prev];
            next[index] = { ...next[index], current: next[index].original, scrambled: false };
            return next;
          });
          scheduleNext(index, word);
        }, 600);
        timers.push(t2);
      }, delay);
      timers.push(t1);
    };

    words.forEach((word, index) => scheduleNext(index, word));

    return () => timers.forEach(clearTimeout);
  }, [paragraphText]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'rgba(240, 238, 233, 0.78)' }}
    >
      <div style={{ maxWidth: '640px', padding: '2rem', lineHeight: 1.9 }}>
        <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 300, color: '#4a3f36' }}>
          {wordStates.map((ws, i) => (
            <motion.span
              key={i}
              animate={{ opacity: ws.scrambled ? 0.55 : 1 }}
              transition={{ duration: 0.15 }}
              style={{
                display: 'inline-block',
                marginRight: '0.28em',
                fontStyle: ws.scrambled ? 'italic' : 'normal',
              }}
            >
              {ws.current}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
};

// ─── SiteFooter ───────────────────────────────────────────────────────────────

const SiteFooter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '3rem 1rem',
        fontSize: '0.78rem',
        opacity: 0.38,
        letterSpacing: '0.06em',
        color: '#4a3f36',
        backgroundColor: 'rgba(240, 238, 233, 0.6)',
      }}
    >
      {t('sodivergent.made_by')}
    </footer>
  );
};

// ─── Root ─────────────────────────────────────────────────────────────────────

const SoDivergent: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgTexture})`,
        backgroundSize: '600px 600px',
        backgroundPosition: '0 0',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <HeroSection />
      <AlwaysThinkingSection />
      <CantGetStartedSection />
      <DyslexicSection />
      <SiteFooter />
    </div>
  );
};

export default SoDivergent;
