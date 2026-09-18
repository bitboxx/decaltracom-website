import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { type ReactNode, useEffect, useRef, useState } from 'react';

import { Container } from '@/components/elements/container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

import styles from './feature106.module.css';

export type Feature106Item = {
  id: number;
  header: string;
  excerpt: string;
  content: ReactNode;
};

interface Feature106Props {
  id?: string;
  className?: string;
  features: Feature106Item[];
}

type StorySurface = 'desktop' | 'mobile';

const Feature106 = ({ id, className, features }: Feature106Props) => {
  const initialValue = features[0]?.id.toString() ?? '';
  const [desktopValue, setDesktopValue] = useState(initialValue);
  const [mobileValue, setMobileValue] = useState(initialValue);
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollFrame = useRef(0);

  useEffect(() => () => window.cancelAnimationFrame(scrollFrame.current), []);

  function selectFeature(
    value: string,
    surface: StorySurface,
    focusHeading = false
  ) {
    if (surface === 'mobile') setMobileValue(value);
    else setDesktopValue(value);

    window.cancelAnimationFrame(scrollFrame.current);
    if (!value) return;

    // Wait for the selected content to render before measuring or moving focus.
    scrollFrame.current = window.requestAnimationFrame(() => {
      const index = features.findIndex(
        feature => feature.id.toString() === value
      );
      const anchor =
        surface === 'desktop' ? desktopRef.current : mobileRefs.current[index];
      const heading = anchor?.querySelector<HTMLHeadingElement>(
        surface === 'desktop'
          ? '[role="tabpanel"][data-state="active"] h2'
          : '[data-story-heading]'
      );
      if (!anchor || !heading) return;

      if (focusHeading) heading.focus({ preventScroll: true });
      const headerSpace =
        Number.parseFloat(
          window.getComputedStyle(document.documentElement).scrollPaddingTop
        ) || 0;
      const headingBounds = heading.getBoundingClientRect();
      if (
        headingBounds.top < headerSpace + 16 ||
        headingBounds.bottom > window.innerHeight - 24
      ) {
        anchor.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
            .matches
            ? 'instant'
            : 'smooth',
          block: 'start',
        });
      }
    });
  }

  function renderPanel(
    feature: Feature106Item,
    index: number,
    surface: StorySurface
  ) {
    const previous = features[index - 1];
    const next = features[index + 1];

    return (
      <>
        <div className={styles.copy}>
          <h2 className={styles.heading} tabIndex={-1} data-story-heading>
            {feature.excerpt}
          </h2>
          {feature.content}
        </div>
        <nav className={styles.footer} aria-label="About story navigation">
          {previous ? (
            <button
              type="button"
              className={cn(styles.storyLink, styles.previous)}
              onClick={() =>
                selectFeature(previous.id.toString(), surface, true)
              }
            >
              <ArrowLeft aria-hidden="true" /> Previous
            </button>
          ) : (
            <span className={styles.previous} />
          )}
          <span
            className={styles.progress}
            aria-label={'Section ' + (index + 1) + ' of ' + features.length}
          >
            {String(index + 1).padStart(2, '0')} /{' '}
            {String(features.length).padStart(2, '0')}
          </span>
          {next ? (
            <button
              type="button"
              className={cn(styles.storyLink, styles.next)}
              onClick={() => selectFeature(next.id.toString(), surface, true)}
            >
              <span>Next: {next.header}</span>
              <ArrowRight aria-hidden="true" />
            </button>
          ) : (
            <a
              href="/credit-decisioning"
              className={cn(styles.storyLink, styles.next)}
            >
              <span>Explore Credit Decisioning</span>
              <ArrowRight aria-hidden="true" />
            </a>
          )}
        </nav>
      </>
    );
  }

  return (
    <section id={id} className={cn('my-24', className)} aria-label="The DecAltra story">
      <Container>
        <Accordion
          type="single"
          collapsible
          value={mobileValue}
          onValueChange={value => selectFeature(value, 'mobile')}
          className={styles.mobile}
        >
          {features.map((feature, index) => (
            <AccordionItem
              key={feature.id}
              value={feature.id.toString()}
              className={styles.mobileItem}
              ref={element => {
                mobileRefs.current[index] = element;
              }}
            >
              <AccordionTrigger
                className={styles.mobileTrigger}
                aria-label={`${String(index + 1).padStart(2, '0')}. ${feature.header}`}
              >
                <span className={styles.navigationLabel}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {feature.header}
                </span>
              </AccordionTrigger>
              <AccordionContent className={styles.mobileContent}>
                {renderPanel(feature, index, 'mobile')}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Tabs
          value={desktopValue}
          onValueChange={value => selectFeature(value, 'desktop')}
          orientation="vertical"
          className={styles.desktop}
          ref={desktopRef}
        >
          <TabsList
            className={styles.navigation}
            aria-label="About DecAltra sections"
          >
            {features.map((feature, index) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id.toString()}
                className={styles.navigationItem}
                aria-label={`${String(index + 1).padStart(2, '0')}. ${feature.header}`}
              >
                <span className={styles.navigationLabel}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {feature.header}
                </span>
                <ChevronRight aria-hidden="true" className={styles.chevron} />
              </TabsTrigger>
            ))}
          </TabsList>
          {features.map((feature, index) => (
            <TabsContent
              key={feature.id}
              value={feature.id.toString()}
              forceMount
              inert={desktopValue !== feature.id.toString()}
              aria-hidden={desktopValue !== feature.id.toString()}
              className={styles.panel}
            >
              {renderPanel(feature, index, 'desktop')}
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export { Feature106 };
