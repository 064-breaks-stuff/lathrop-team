'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

const EASING = 'cubicBezier(0.22, 1, 0.36, 1)';

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 900,
  className = '',
}) {
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || hasAnimated.current) {
      return undefined;
    }

    if (prefersReducedMotion()) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      return undefined;
    }

    element.style.opacity = '0';
    element.style.transform = 'translateY(24px)';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) {
          return;
        }

        hasAnimated.current = true;
        observer.disconnect();

        anime({
          targets: element,
          opacity: [0, 1],
          translateY: [24, 0],
          duration,
          delay,
          easing: EASING,
        });
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}