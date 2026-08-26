'use client';

import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const EASING = 'cubicBezier(0.22, 1, 0.36, 1)';

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function useStatCounter(target, options = {}) {
  const { duration = 1200 } = options;
  const [value, setValue] = useState(0);
  const elementRef = useRef(null);
  const hasStartedRef = useRef(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || hasStartedRef.current) {
      return undefined;
    }

    if (prefersReducedMotion()) {
      setValue(target);
      hasStartedRef.current = true;
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStartedRef.current) {
          return;
        }

        hasStartedRef.current = true;
        observer.disconnect();

        const animatedValue = { value: 0 };

        animationRef.current = anime({
          targets: animatedValue,
          value: Number(target),
          duration,
          easing: EASING,
          round: 1,
          update: () => {
            setValue(animatedValue.value);
          },
        });
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [target, duration]);

  return {
    ref: elementRef,
    value,
  };
}

export { useStatCounter };
export default useStatCounter;