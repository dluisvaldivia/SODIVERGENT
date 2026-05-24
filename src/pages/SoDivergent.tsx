import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import bgTexture from '../assets/white-paper-texture.jpg';
import { DyslexicText } from '../utils/dyslexicMorph';

// ─── Types ───────────────────────────────────────────────────────────────────

type EffectKey = 'thinking' | 'stuck' | 'dyslexic';

interface ThoughtBubble {
  id: number;
  x: number;
  y: number;
  text: string;
  riseY: number;
  driftX: number;
  duration: number;
}

// ─── HeroSection ─────────────────────────────────────────────────────────────

interface HeroSectionProps {
  activeEffect: EffectKey;
  onSelectEffect: (effect: EffectKey) => void;
  effectPanelRef: React.RefObject<HTMLDivElement | null>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ activeEffect, onSelectEffect, effectPanelRef }) => {
  const { t, i18n } = useTranslation();
  const activeLang = i18n.language?.slice(0, 2) || 'en';

  const buttons: { key: EffectKey; label: string }[] = [
    { key: 'thinking', label: t('sodivergent.btn_thinking') },
    { key: 'stuck',    label: t('sodivergent.btn_stuck') },
    { key: 'dyslexic', label: t('sodivergent.btn_dyslexic') },
  ];

  const handleSelect = (key: EffectKey) => {
    onSelectEffect(key);
    effectPanelRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center"
      style={{ backgroundColor: 'rgba(240, 238, 233, 0.55)', minHeight: '100vh' }}
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

      {/* Effect selector buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9, ease: 'easeOut' }}
        style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center', padding: '0 1rem' }}
      >
        {buttons.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => handleSelect(key)}
            style={{
              background: activeEffect === key ? 'rgba(74, 63, 54, 0.07)' : 'none',
              border: '1px solid rgba(74, 63, 54, 0.22)',
              borderRadius: '0.35rem',
              cursor: 'pointer',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: activeEffect === key ? 600 : 300,
              opacity: activeEffect === key ? 1 : 0.5,
              padding: '0.6rem 1.4rem',
              transition: 'all 0.2s ease',
              color: '#4a3f36',
              fontFamily: 'Lexend, sans-serif',
            }}
          >
            {label}
          </button>
        ))}
      </motion.div>

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
  const recentPhrases = useRef<{ text: string; time: number }[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastThoughtTime.current < nextCooldown.current) return;

    lastThoughtTime.current = now;
    nextCooldown.current = 800 + Math.random() * 300;

    const rect = sectionRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rawThoughts = t('sodivergent.always_thinking_thoughts', { returnObjects: true });
    const thoughtsList: string[] = Array.isArray(rawThoughts) ? rawThoughts : [];
    if (thoughtsList.length === 0) return;

    recentPhrases.current = recentPhrases.current.filter((p) => now - p.time < 10000);
    const recentTexts = new Set(recentPhrases.current.map((p) => p.text));
    const pool = thoughtsList.filter((t) => !recentTexts.has(t));
    const available = pool.length > 0 ? pool : thoughtsList;
    const text = available[Math.floor(Math.random() * available.length)];
    recentPhrases.current.push({ text, time: now });
    const id = idCounter.current++;
    const riseY = 130 + Math.random() * 120;
    const driftX = (Math.random() - 0.5) * 60;
    const duration = 2.8 + Math.random() * 2;

    setThoughts((prev) => [...prev, { id, x, y, text, riseY, driftX, duration }]);
  }, [t]);

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="flex items-center justify-center overflow-hidden"
      style={{ height: '100vh', cursor: 'crosshair', position: 'relative' }}
    >
      {thoughts.map((thought) => (
        <motion.div
          key={thought.id}
          initial={{ opacity: 0, y: 0, x: 0, scale: 0.9 }}
          animate={{ opacity: [0, 1, 1, 0], y: -thought.riseY, x: thought.driftX, scale: 1 }}
          transition={{
            duration: thought.duration,
            y: { ease: 'linear', duration: thought.duration },
            x: { ease: 'linear', duration: thought.duration },
            opacity: { ease: 'easeInOut', times: [0, 0.18, 0.75, 1], duration: thought.duration },
            scale: { ease: 'easeOut', duration: thought.duration * 0.2 },
          }}
          onAnimationComplete={() =>
            setThoughts((prev) => prev.filter((th) => th.id !== thought.id))
          }
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

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.4, duration: 1 }}
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
    </div>
  );
};

// ─── CantGetStartedSection ────────────────────────────────────────────────────

// Tune these constants to adjust the experience:
const STUCK_STEP = 0.007;   // progress per wheel tick at calm speed
const STUCK_TRAVEL = 0.12;  // fraction of progress each line takes to rise fully
const STUCK_WINDOW_MS = 350; // time window to measure scroll velocity
const STUCK_SLOW_AT = 3;     // ticks/window before step starts shrinking
const STUCK_PUSH_AT = 6;     // ticks/window before progress reverses

const CantGetStartedSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const ticksRef = useRef<number[]>([]);
  const [progress, setProgress] = useState(0);

  const lines = [
    t('sodivergent.cant_start_prompt_line_1') || 'THIS IS',
    t('sodivergent.cant_start_prompt_line_2') || 'WHAT TRYING TO DO SOMETHING',
    t('sodivergent.cant_start_prompt_line_3') || 'THAT SHOULD COME NATURALLY',
    t('sodivergent.cant_start_prompt_line_4') || 'FEELS LIKE',
    t('sodivergent.cant_start_prompt_line_5') || 'WHEN YOUR MIND JUST WONT LISTEN',
  ];

  const thresholds = [0.05, 0.23, 0.43, 0.63, 0.83];

  const lineProgress = (idx: number) => {
    const start = thresholds[idx];
    return Math.max(0, Math.min(1, (progress - start) / STUCK_TRAVEL));
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Capture while this section is covering the viewport
      const active = rect.top <= window.innerHeight * 0.1 && rect.bottom > 0;
      if (!active) return;

      const p = progressRef.current;
      const d = e.deltaY;

      // At boundaries let the page scroll normally
      if (d < 0 && p <= 0) return;
      if (d > 0 && p >= 1) return;

      e.preventDefault();

      // Measure velocity: ticks fired within the last STUCK_WINDOW_MS
      const now = Date.now();
      ticksRef.current = ticksRef.current.filter(t => now - t < STUCK_WINDOW_MS);
      ticksRef.current.push(now);
      const velocity = ticksRef.current.length;

      // Calm → full step. Fast → step shrinks. Rushing → progress reverses.
      let multiplier: number;
      if (velocity <= STUCK_SLOW_AT) {
        multiplier = 1;
      } else if (velocity < STUCK_PUSH_AT) {
        multiplier = 1 - (velocity - STUCK_SLOW_AT) / (STUCK_PUSH_AT - STUCK_SLOW_AT);
      } else {
        multiplier = -0.4;
      }

      const next = Math.max(0, Math.min(1, p + Math.sign(d) * STUCK_STEP * multiplier));
      progressRef.current = next;
      setProgress(next);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div ref={sectionRef} style={{ height: '100vh', position: 'relative' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: '640px', textAlign: 'center', padding: '2rem' }}>
          {lines.map((line, idx) => {
            const lp = lineProgress(idx);
            return (
              <div
                key={idx}
                style={{
                  opacity: lp,
                  transform: `translateY(${(1 - lp) * 200}px)`,
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                  fontWeight: 700,
                  color: '#4a3f36',
                  lineHeight: 1.6,
                  letterSpacing: '0.02em',
                }}
              >
                {line}
              </div>
            );
          })}
        </div>

        <motion.div
          animate={
            lineProgress(lines.length - 1) < 1
              ? { opacity: [0.4, 1, 0.4] }
              : { opacity: 0 }
          }
          transition={
            lineProgress(lines.length - 1) < 1
              ? { repeat: Infinity, duration: 1.4, ease: 'easeInOut' }
              : { duration: 1.0, ease: 'easeOut' }
          }
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.15rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: '#4a3f36',
            pointerEvents: 'none',
            userSelect: 'none',
            fontFamily: 'Lexend, sans-serif',
          }}
        >
          <span style={{ fontSize: '1.3rem' }}>scroll</span>
          <span style={{ fontSize: '0.85rem', lineHeight: 1 }}>↓</span>
        </motion.div>
      </div>
    </div>
  );
};

// ─── DyslexicSection ─────────────────────────────────────────────────────────

const DyslexicSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: '100vh' }}
    >
      <div style={{ maxWidth: '640px', padding: '2rem', lineHeight: 1.9 }}>
        <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 300, color: '#4a3f36' }}>
          <DyslexicText text={t('sodivergent.dyslexic_text')} />
        </p>
      </div>
    </div>
  );
};

// ─── EffectPanel ─────────────────────────────────────────────────────────────

interface EffectPanelProps {
  activeEffect: EffectKey;
  panelRef: React.RefObject<HTMLDivElement | null>;
}

const EffectPanel: React.FC<EffectPanelProps> = ({ activeEffect, panelRef }) => {
  return (
    <div ref={panelRef} style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Active section — remounts on tab change, resetting state */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeEffect}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          {activeEffect === 'thinking' && <AlwaysThinkingSection />}
          {activeEffect === 'stuck'    && <CantGetStartedSection />}
          {activeEffect === 'dyslexic' && <DyslexicSection />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ─── BackToTop ────────────────────────────────────────────────────────────────

const BackToTop: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 100,
        background: 'rgba(240, 238, 233, 0.88)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(74, 63, 54, 0.2)',
        borderRadius: '0.4rem',
        cursor: 'pointer',
        padding: '0.55rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.2rem',
        color: '#4a3f36',
        fontFamily: 'Lexend, sans-serif',
        fontSize: '0.68rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        opacity: 0.85,
      }}
    >
      <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>↑</span>
      <span>{t('sodivergent.back_to_top')}</span>
    </motion.button>
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
  const [activeEffect, setActiveEffect] = useState<EffectKey>('thinking');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const effectPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setShowBackToTop(scrolled >= total - 250);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bgTexture})`,
        backgroundSize: '100% auto',
        backgroundPosition: '0 0',
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <HeroSection
        activeEffect={activeEffect}
        onSelectEffect={setActiveEffect}
        effectPanelRef={effectPanelRef}
      />
      <EffectPanel
        activeEffect={activeEffect}
        panelRef={effectPanelRef}
      />
      <SiteFooter />

      <AnimatePresence>
        {showBackToTop && <BackToTop key="back-to-top" />}
      </AnimatePresence>
    </div>
  );
};

export default SoDivergent;
