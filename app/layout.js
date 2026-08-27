'use client';

import { useCallback, useState } from 'react';

import '../styles/tokens.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/components.css';
import '../styles/home.css';
import '../styles/pages.css';
import '../styles/forms.css';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import HeroLoader from '../components/home/HeroLoader';

export default function RootLayout({ children }) {
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setIsLoaderComplete(true);
  }, []);

  return (
    <html lang="en">
      <body>
        {!isLoaderComplete && <HeroLoader onComplete={handleLoaderComplete} />}

        <PageTransition />

        <div
          className={
            isLoaderComplete
              ? 'site site--ready'
              : 'site site--loading'
          }
          aria-hidden={!isLoaderComplete}
        >
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}