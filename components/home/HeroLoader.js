'use client';

import { useEffect, useState, useRef } from 'react';
import anime from 'animejs';
import Image from 'next/image';

const EASING = 'cubicBezier(0.22, 1, 0.36, 1)';

function shouldReduceMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function HeroLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const frameRef = useRef(null);
  const sparkleRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    if (shouldReduceMotion()) {
      setVisible(false);
      onComplete && onComplete();
      return;
    }

    const frame = frameRef.current;
    const sparkle = sparkleRef.current;
    const mask = maskRef.current;
    const root = document.body;

    if (root) root.style.overflow = 'hidden';

    // Frame draw
    anime({
      targets: frame,
      borderWidth: ['0px', '1px'],
      duration: 600,
      easing: EASING,
    });

    // Sparkle twinkle (scale/opacity loop)
    anime({
      targets: sparkle,
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 0.8],
      duration: 900,
      easing: 'easeInOutSine',
      loop: true,
    });

    // Mask wipe after short delay
    anime({
      targets: mask,
      translateX: ['0%', '100%'],
      duration: 2000,
      delay: 1400,
      easing: EASING,
      complete: () => {
        setVisible(false);
        if (root) root.style.overflow = '';
        onComplete && onComplete();
      },
    });
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="hero-loader">
      <div className="hero-loader-inner">
        <div ref={frameRef} className="hero-loader-frame">
          <div className="hero-loader-logo">
            <Image
              src="/logos/1.jpg"
              alt="Lathrop Team logo"
              width={48}
              height={48}
            />
            <span className="hero-loader-text">LATHROP TEAM</span>
          </div>
          <span ref={sparkleRef} className="hero-loader-sparkle" />
        </div>
        <div ref={maskRef} className="hero-loader-mask" />
      </div>
    </div>
  );
}