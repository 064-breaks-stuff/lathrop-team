'use client';

import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="site-logo" aria-label="Lathrop Team Home">
        <Image
          src="/logos/lathrop-logo-icon.jpg"
          alt="Lathrop Team logo icon"
          width={40}
          height={40}
        />
        <span className="site-logo-text">LATHROP TEAM</span>
      </Link>
      <Nav />
    </header>
  );
}