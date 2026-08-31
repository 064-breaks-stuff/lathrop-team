'use client';

import { useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import PageTransition from './PageTransition';
import HeroLoader from '../home/HeroLoader';

export default function SiteShell({ children }) {
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.appHydrated = 'true';

    return () => {
      delete document.documentElement.dataset.appHydrated;
    };
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setIsLoaderComplete(true);
  }, []);

  return (
    <>
      {!isLoaderComplete && <HeroLoader onComplete={handleLoaderComplete} />}

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