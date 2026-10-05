import Link from 'next/link';

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-background" aria-hidden="true">
        <img
          src="/hero/hero.jpg"
          alt=""
          className="home-hero-fallback-image"
        />
        <div className="home-hero-overlay" />
      </div>

      <div className="home-hero-content">
        <p className="home-hero-eyebrow">Lathrop Team · Fox Cities, Wisconsin</p>

        <h1 className="home-hero-title">
          Local guidance for
          <em>your next chapter.</em>
        </h1>

        <p className="home-hero-copy">
          Three generations of local real estate experience, helping Fox Cities
          families buy, sell, and move forward with confidence.
        </p>

        <div className="home-hero-actions">
          <Link href="/buy" className="btn btn--light">
            Explore homes
          </Link>

          <Link href="/home-valuation" className="text-link text-link--light">
            Get your home value <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="home-hero-footnote">
        <span>Appleton · Neenah · Menasha · Fox Cities</span>
        <span className="home-hero-footnote-line" />
        <span>Three generations</span>
      </div>

      <a href="#home-intro" className="home-hero-scroll" aria-label="Scroll to explore">
        <span>Scroll to explore</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}