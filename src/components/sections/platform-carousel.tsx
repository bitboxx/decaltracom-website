import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './platform-carousel.module.css';

const slides = [
  ['Portfolio overview', 'Your credit workflow, connected'],
  [
    'Financial Spreading',
    'Extract financial statements into reviewed financials and credit-adjusted metrics',
  ],
  [
    'Analytics',
    'Generate transparent quantitative and qualitative scores from your credit models',
  ],
  [
    'Memo',
    'Assemble preceding analyses and additional evidence into decision-ready credit memos',
  ],
];

export function PlatformCarousel({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setPlaying(!preference.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    preference.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new ResizeObserver(entries => {
      frame.current?.style.setProperty(
        '--preview-scale',
        String(entries[0].contentRect.width / 680)
      );
    });
    if (frame.current) observer.observe(frame.current);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!playing || hovered || !visible) return;
    const timer = window.setInterval(
      () => setActive(index => (index + 1) % slides.length),
      6000
    );
    return () => window.clearInterval(timer);
  }, [playing, hovered, visible]);

  return (
    <section
      className={styles.carousel}
      aria-label="Explore the DecAltra platform"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setPlaying(false);
      }}
    >
      <div ref={frame} className={styles.frame} data-active={active}>
        <div className={styles.canvas}>{children}</div>
      </div>
      <div
        className={styles.caption}
        aria-live={playing ? 'off' : 'polite'}
        aria-atomic="true"
      >
        <strong>{slides[active][0]}</strong>
        <span>{slides[active][1]}</span>
      </div>
      <div className={styles.controls}>
        <span className={styles.disclosure}>
          Illustrative views · Not actual screenshot · Fictional data
        </span>
        <div className={styles.buttons}>
          {slides.map(([title], index) => (
            <button
              key={title}
              type="button"
              className={styles.dot}
              aria-label={`Show ${title}`}
              aria-current={active === index ? 'true' : undefined}
              onClick={() => {
                setActive(index);
                setPlaying(false);
              }}
            >
              <span />
            </button>
          ))}
          <button
            type="button"
            className={styles.play}
            aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
            onClick={() => setPlaying(value => !value)}
          >
            <svg
              viewBox="0 0 16 16"
              width="12"
              height="12"
              fill="currentColor"
              aria-hidden="true"
            >
              {playing ? (
                <path d="M4 3h3v10H4zm5 0h3v10H9z" />
              ) : (
                <path d="M4 2l10 6-10 6z" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
