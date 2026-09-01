import Link from 'next/link';
import CommunityGrid from '../../components/communities/CommunityGrid';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const metadata = {
  title: 'Fox Cities Communities | Lathrop Team',
  description:
    'Explore Appleton, Neenah, Menasha, Kaukauna, Kimberly, Little Chute, Greenville, and Oshkosh with the Lathrop Team.',
};

export default function CommunitiesPage() {
  return (
    <main className="editorial-page page-communities">
      <section className="editorial-hero communities-hero">
        <div className="editorial-hero-index" aria-hidden="true">
          06
        </div>

        <div className="editorial-hero-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              Fox Cities communities
            </p>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <h1 className="editorial-hero-title">
              Find the community
              <em>that fits your life.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <p className="editorial-hero-description">
              Every Fox Cities community has its own rhythm. We help you look
              beyond a listing and understand the day-to-day details that shape
              where home feels right.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={270} className="editorial-hero-actions">
            <Link href="/contact" className="btn btn--light">
              Talk through your search
            </Link>
          </ScrollReveal>
        </div>

        <div className="editorial-hero-mark" aria-hidden="true">
          F
        </div>

        <div className="editorial-hero-footnote">
          <span>Fox Cities, Wisconsin</span>
          <span className="editorial-hero-footnote-line" />
          <span>Local perspective</span>
        </div>
      </section>

      <section className="communities-intro">
        <ScrollReveal className="communities-intro-aside">
          <span className="editorial-section-number">01 — Explore locally</span>
          <span className="communities-intro-mark" aria-hidden="true">
            8
          </span>
        </ScrollReveal>

        <div className="communities-intro-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              More than a map pin
            </p>

            <h2 className="editorial-section-title">
              The right address starts
              <em>with the right context.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} className="communities-intro-copy">
            <p>
              From Appleton and Neenah to Menasha, Kaukauna, Kimberly, Little
              Chute, Greenville, and Oshkosh, the Fox Cities offer a range of
              ways to live—quiet streets, walkable cores, newer development,
              established neighborhoods, and everything in between.
            </p>

            <p>
              We will talk through schools, commute times, resale history, and
              local amenities so you can decide with a fuller picture of what
              each area offers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="communities-directory">
        <ScrollReveal className="communities-directory-heading">
          <p className="editorial-eyebrow">
            <span className="editorial-eyebrow-rule" />
            Where we work
          </p>

          <h2 className="editorial-section-title">
            Communities at
            <em>a glance.</em>
          </h2>
        </ScrollReveal>

        <CommunityGrid />
      </section>

      <section className="communities-guidance">
        <div className="communities-guidance-mark" aria-hidden="true">
          L
        </div>

        <div className="communities-guidance-content">
          <ScrollReveal>
            <p className="editorial-eyebrow editorial-eyebrow--light">
              <span className="editorial-eyebrow-rule" />
              Let’s narrow it down
            </p>

            <h2>
              Not sure where
              <em>to begin?</em>
            </h2>

            <p>
              Tell us what matters most to you. We will help you compare the
              right areas and build a thoughtful starting point for your Fox
              Cities search.
            </p>

            <Link href="/contact" className="text-link">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}