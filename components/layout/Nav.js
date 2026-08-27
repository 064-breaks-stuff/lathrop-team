'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationLinks = [
  { href: '/buy', label: 'Buy' },
  { href: '/sell', label: 'Sell' },
  { href: '/home-valuation', label: 'Home Valuation' },
  { href: '/communities', label: 'Communities' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/team', label: 'Team' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function isActiveRoute(pathname, href) {
  return pathname === href;
}

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="site-nav-wrap" aria-label="Main navigation">
      <div className="site-nav-desktop">
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActiveRoute(pathname, link.href)
                ? 'nav-link nav-link--active'
                : 'nav-link'
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      <button
        className="site-nav-toggle"
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="site-nav-toggle-label">
          {isOpen ? 'Close' : 'Menu'}
        </span>

        <span className="site-nav-toggle-icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <div
        id={menuId}
        className={
          isOpen
            ? 'site-nav-mobile site-nav-mobile--open'
            : 'site-nav-mobile'
        }
      >
        <div className="site-nav-mobile-inner">
          <div className="site-nav-mobile-links">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActiveRoute(pathname, link.href)
                    ? 'site-nav-mobile-link site-nav-mobile-link--active'
                    : 'site-nav-mobile-link'
                }
                onClick={closeMenu}
              >
                <span>{link.label}</span>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </Link>
            ))}
          </div>

          <Link
            href="/home-valuation"
            className="site-nav-mobile-cta"
            onClick={closeMenu}
          >
            Get your home value <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}