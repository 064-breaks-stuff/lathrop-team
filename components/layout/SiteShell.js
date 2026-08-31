'use client';

import { useCallback, useState } from 'react';
import BootScreen from './BootScreen';
import Header from './Header';
import Footer from './Footer';
import PageTransition from './PageTransition';
import HeroLoader from '../home/HeroLoader';

export default function SiteShell({ children }) {
  const [bootScreenComplete, setBootScreenComplete] = useState(false);
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);

  const handleBootScreenComplete = useCallback(() => {
    setBootScreenComplete(true);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setIsLoaderComplete(true);
  }, []);

  return (
    <>
      {!bootScreenComplete && (
        <BootScreen onComplete={handleBootScreenComplete} />
      )}

      {bootScreenComplete && !isLoaderComplete && (
        <HeroLoader onComplete={handleLoaderComplete} />
      )}

      <PageTransition />

      <div
        className={isLoaderComplete ? 'site site--ready' : 'site site--loading'}
        aria-hidden={!isLoaderComplete}
      >
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </div>
    </>
  );
}