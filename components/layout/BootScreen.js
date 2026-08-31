'use client';

import { useEffect } from 'react';

const BOOT_SCREEN_DURATION = 2000;

export default function BootScreen({ onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete();
    }, BOOT_SCREEN_DURATION);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="boot-screen" aria-hidden="true">
      <div className="boot-screen-frame" />

      <div className="boot-screen-content">
        <p className="boot-screen-message">
          You&apos;re at the perfect place for
          <span>Fox Cities real estate talk!</span>
        </p>
      </div>

      <span className="boot-screen-index">Fox Cities, Wisconsin</span>
    </div>
  );
}