'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/buy', label: 'Buy' },
  { href: '/sell', label: 'Sell' },
  { href: '/home-valuation', label: 'Home Valuation' },
  { href: '/communities', label: 'Communities' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/team', label: 'Team' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav" aria-label="Main Navigation">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={active ? 'nav-link nav-link--active' : 'nav-link'}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}