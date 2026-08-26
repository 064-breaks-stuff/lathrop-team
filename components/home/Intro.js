import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

export default function Intro() {
  return (
    <section className="home-intro">
      <div className="home-intro-mark" aria-hidden="true">
        <span>03</span>
        <span>Generations</span>
      </div>

      <div className="home-intro-content">
        <ScrollReveal>
          <p className="section-eyebrow">A family helping families</p>

          <h2 className="home-section-title">
            Experience that feels personal.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <div className="home-intro-copy">
            <p>
              The Lathrop Team combines the wisdom of decades in the market with
              the energy of a new generation of agents.
            </p>

            <p>
              We’re a family-run team that has helped hundreds of families buy
              and sell in Appleton and the surrounding Fox Cities communities.
              Every transaction receives the structure, data, and personal
              attention it deserves.
            </p>

            <Link href="/about" className="text-link">
              Discover our story
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}