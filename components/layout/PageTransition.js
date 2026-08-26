'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import anime from 'animejs';

const EASING = 'cubicBezier(0.22, 1, 0.36, 1)';

function shouldReduceMotion() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function PageTransition() {
  const pathname = usePathname();
  const overlayRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;

    if (!overlay) {
      return undefined;
    }

    if (animationRef.current) {
      animationRef.current.pause();
    }

    if (shouldReduceMotion()) {
      overlay.style.opacity = '0';
      overlay.style.transform = 'translateX(100%)';
      return undefined;
    }

    overlay.style.opacity = '1';
    overlay.style.transform = 'translateX(-102%)';

    animationRef.current = anime({
      targets: overlay,
      translateX: ['-102%', '0%', '102%'],
      duration: 900,
      easing: EASING,
      complete: () => {
        overlay.style.opacity = '0';
        overlay.style.transform = 'translateX(-102%)';
      },
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      className="page-transition-overlay"
      aria-hidden="true"
    >
      <div className="page-transition-frame" />
      <span className="page-transition-mark">L</span>
    </div>
  );
}