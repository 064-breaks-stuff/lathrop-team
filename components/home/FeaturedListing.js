import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

export default function FeaturedListing() {
  return (
    <section className="home-featured">
      <div className="home-featured-heading">
        <ScrollReveal>
          <p className="section-eyebrow">Featured home</p>

          <h2 className="home-section-title">
            Find a place
            <br />
            worth coming home to.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <Link href="/buy" className="text-link">
            Explore available homes
            <span aria-hidden="true">↗</span>
          </Link>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={240} className="home-featured-visual">
        <div className="home-featured-image-frame">
          <img
            src="/hero/hero.jpg"
            alt="Fox Cities property"
            className="home-featured-image"
          />

          <div className="home-featured-image-label">
            <span>01</span>
            <span>Fox Cities property</span>
          </div>
        </div>

        <div className="home-featured-placeholder">
          <span>Featured home</span>
          <p>Listing details will be connected here later.</p>
        </div>
      </ScrollReveal>
    </section>
  );
}