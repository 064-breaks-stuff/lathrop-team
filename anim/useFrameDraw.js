'use client';

import { useEffect } from 'react';
import anime from 'animejs';

const EASING = 'cubicBezier(0.22, 1, 0.36, 1)';

function shouldReduceMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * useFrameDraw
 * - Animates a frame (border) around an element, using a pseudo-element.
 * - You need CSS that defines .frame-draw::before with transform-origin: left center;
 */
export default function useFrameDraw(ref) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (shouldReduceMotion()) {
      node.classList.add('frame-draw--visible');
      return;
    }

    node.classList.add('frame-draw');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          observer.disconnect();

          // Use Anime.js to animate a CSS variable
          const initial = { progress: 0 };

          anime({
            targets: initial,
            progress: 100,
            duration: 900,
            easing: EASING,
            update: () => {
              node.style.setProperty('--frame-progress', `${initial.progress}%`);
            },
          });
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref]);
}