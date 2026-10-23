'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function MetaPixelEvents() {
  const pathname = usePathname();
  const leadTrackedForCurrentVisit = useRef(false);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const normalizedPath = pathname.replace(/\/+$/, '') || '/';
    const isThankYouPage = normalizedPath === '/thank-you';

    if (!isThankYouPage) {
      leadTrackedForCurrentVisit.current = false;
    }

    if (typeof window.fbq !== 'function') {
      return;
    }

    if (window.__lathropMetaLastPageView !== pathname) {
      window.fbq('track', 'PageView');
      window.__lathropMetaLastPageView = pathname;
    }

    if (isThankYouPage && !leadTrackedForCurrentVisit.current) {
      window.fbq('track', 'Lead');
      leadTrackedForCurrentVisit.current = true;
    }
  }, [pathname]);

  return null;
}