'use client';

import Link from 'next/link';
import HeroScene from '../../three/HeroScene';

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-background" aria-hidden="true">
        <img
          className="home-hero-fallback-image"
          src="/hero/hero.jpg"
          alt=""
        />

        <div className="home-hero-scene">
          <HeroScene />
        </div>
      </div>

      <div className="home-hero-overlay" aria-hidden="true" />

      <div className="home-hero-content">
        <p className="hero-eyebrow">
          Lathrop Team
          <span className="hero-eyebrow-rule" />
          Fox Cities, Wisconsin
        </p>

        <h1 className="hero-title">
          <span>Fox Cities</span>
          <span>Real Estate,</span>
          <em>Refined.</em>
        </h1>

        <p className="hero-description">
          Three generations of local expertise, a RealTrends verified
          performance record, and 525+ five-star reviews guiding you home.
        </p>

        <p className="hero-affiliation">
          Proudly affiliated with Keller Williams Fox Cities.
        </p>

        <div className="hero-actions">
          <Link href="/buy" className="btn btn--light">
            Find your next home
          </Link>

          <Link href="/home-valuation" className="btn btn--outline-light">
            See what your home is worth
          </Link>
        </div>
      </div>

      <div className="home-hero-index" aria-hidden="true">
        <span>01</span>
        <span className="home-hero-index-line" />
        <span>Fox Cities</span>
      </div>

      <div className="home-hero-scroll" aria-hidden="true">
        <span>Scroll to explore</span>
        <span className="home-hero-scroll-line" />
      </div>
    </section>
  );
}