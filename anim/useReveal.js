'use client';

import { useEffect } from 'react';
import anime from 'animejs';

const EASING = 'cubicBezier(0.22, 1, 0.36, 1)';

function shouldReduceMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * useReveal
 * - Applies per-word or per-letter staggered reveal to the text inside ref.
 * - Mode: 'words' (default) or 'letters'.
 */
export default function useReveal(ref, { mode = 'words', delay = 0 } = {}) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (shouldReduceMotion()) {
      // No animation: ensure text is visible
      node.style.opacity = 1;
      return;
    }

    // Split text into spans
    const text = node.textContent;
    if (!text) return;

    const words = text.split(' ').filter(Boolean);
    const isLetters = mode === 'letters';

    // Clear original text
    node.textContent = '';

    const fragments = [];

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = isLetters ? 'inline-block' : 'inline-block';
      wordSpan.style.whiteSpace = 'pre';
      wordSpan.style.opacity = '0';

      if (isLetters) {
        Array.from(word).forEach((letter) => {
          const letterSpan = document.createElement('span');
          letterSpan.textContent = letter;
          letterSpan.style.display = 'inline-block';
          letterSpan.style.opacity = '0';
          wordSpan.appendChild(letterSpan);
          fragments.push(letterSpan);
        });
      } else {
        wordSpan.textContent = word;
        fragments.push(wordSpan);
      }

      node.appendChild(wordSpan);

      if (wordIndex < words.length - 1) {
        const space = document.createTextNode(' ');
        node.appendChild(space);
      }
    });

    // Intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          observer.disconnect();

          anime({
            targets: fragments,
            opacity: [0, 1],
            translateY: ['0.6em', '0em'],
            easing: EASING,
            duration: 900,
            delay: anime.stagger(40, { start: delay }),
          });
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, mode, delay]);
}