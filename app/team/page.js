import Link from 'next/link';
import ScrollReveal from '../../components/ui/ScrollReveal';
import TeamGrid from '../../components/team/TeamGrid';

export const metadata = {
  title: 'Meet the Team | Lathrop Team',
  description:
    'Meet Diane, Shane, and Oliver Lathrop: a three-generation Fox Cities real estate team built on local experience, clear guidance, and personal service.',
};

export default function TeamPage() {
  return (
    <main className="editorial-page page-team">
      <section className="editorial-hero team-hero">
        <div className="editorial-hero-index" aria-hidden="true">
          05
        </div>

        <div className="editorial-hero-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              Meet the team
            </p>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <h1 className="editorial-hero-title">
              A family helping
              <em>Fox Cities families.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <p className="editorial-hero-description">
              Diane, Shane, and Oliver Lathrop bring three generations of
              perspective to every search, sale, negotiation, and next step.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={270}>
            <Link href="/contact" className="btn btn--light">
              Start a conversation
            </Link>
          </ScrollReveal>
        </div>

        <div className="editorial-hero-mark" aria-hidden="true">
          3
        </div>

        <div className="editorial-hero-footnote">
          <span>Fox Cities, Wisconsin</span>
          <span className="editorial-hero-footnote-line" />
          <span>Three generations</span>
        </div>
      </section>

      <section className="team-intro">
        <ScrollReveal className="team-intro-aside">
          <span className="editorial-section-number">01 — Our people</span>
          <span className="team-intro-mark" aria-hidden="true">
            L
          </span>
        </ScrollReveal>

        <div className="team-intro-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              More perspective at the table
            </p>

            <h2 className="editorial-section-title">
              A depth of experience
              <em>you can feel.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} className="team-intro-copy">
            <p>
              A strong real estate experience depends on more than one person
              trying to manage every detail. The Lathrop Team brings different
              strengths, shared local knowledge, and a consistent focus on
              making each decision clearer.
            </p>

            <p>
              That depth shows up in how we price, how we market, how we
              negotiate, and how we stay present from the first conversation
              through closing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="team-profiles">
        <ScrollReveal className="team-profiles-heading">
          <p className="editorial-eyebrow">
            <span className="editorial-eyebrow-rule" />
            The Lathrop Team
          </p>

          <h2 className="editorial-section-title">
            Meet the people
            <em>behind the guidance.</em>
          </h2>
        </ScrollReveal>

        <TeamGrid />
      </section>

      <section className="team-contact-band">
        <div className="team-contact-band-mark" aria-hidden="true">
          L
        </div>

        <div className="team-contact-band-content">
          <ScrollReveal>
            <p className="editorial-eyebrow editorial-eyebrow--light">
              <span className="editorial-eyebrow-rule" />
              Let’s talk
            </p>

            <h2>
              The right move starts
              <em>with the right conversation.</em>
            </h2>

            <p>
              Whether you are buying, selling, or simply thinking ahead, we are
              here to listen, answer questions, and help you map the next step.
            </p>

            <Link href="/contact" className="text-link">
              Contact the Lathrop Team <span aria-hidden="true">↗</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}