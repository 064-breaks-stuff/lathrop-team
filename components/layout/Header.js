'use client';

import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-logo" aria-label="Lathrop Team Home">
          <Image
            src="logos/1.jpg"
            alt="Lathrop Team logo"
            width={44}
            height={44}
            priority
          />
          <span className="site-logo-text">Lathrop Team</span>
        </Link>

        <Nav />
      </div>
    </header>
  );
}