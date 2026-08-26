'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import anime from 'animejs';

const EASING = 'cubicBezier(0.22, 1, 0.36, 1)';

function shouldReduceMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function PageTransition() {
  const pathname = usePathname();
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    if (shouldReduceMotion()) return;

    // Start from left hidden
    overlay.style.transform = 'translateX(-100%)';
    overlay.style.opacity = '1';

    anime({
      targets: overlay,
      translateX: ['-100%', '0%', '100%'],
      easing: EASING,
      duration: 800,
      loop: false,
    });
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      className="page-transition-overlay"
      aria-hidden="true"
    />
  );
}