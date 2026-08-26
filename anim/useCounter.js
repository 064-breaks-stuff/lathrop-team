'use client';

import { useEffect, useState } from 'react';
import anime from 'animejs';

const EASING = 'cubicBezier(0.22, 1, 0.36, 1)';

function shouldReduceMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * useCounter
 * - Returns a displayed number that animates from 0 to target on first view.
 */
export default function useCounter(target, { duration = 1200 } = {}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion()) {
      setValue(target);
      return;
    }

    let observer;
    let node;

    function startAnimation() {
      anime({
        targets: { val: 0 },
        val: target,
        duration,
        easing: EASING,
        update: (anim) => {
          setValue(Math.round(anim.animations[0].currentValue));
        },
      });
    }

    const handleRef = (el) => {
      node = el;
      if (!node) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer.disconnect();
            startAnimation();
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(node);
    };

    // We return a ref-like function.
    setValue((prev) => prev); // no-op to avoid warnings

    return () => {
      if (observer && node) observer.disconnect();
    };
  }, [target, duration]);

  // The hook user will render value and provide an element to observe
  return value;
}