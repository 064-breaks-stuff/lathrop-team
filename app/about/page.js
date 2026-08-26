import Link from 'next/link';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const metadata = {
  title: 'About Lathrop Team | Fox Cities Real Estate',
  description:
    'Learn the story behind the Lathrop Team: three generations of Fox Cities real estate experience, locally grounded guidance, and independently verified results.',
};

const teamValues = [
  {
    number: '01',
    title: 'Experience that stays personal',
    copy: 'Diane Lathrop has built more than 35 years of Fox Cities market experience into a practice grounded in communication, consistency, and care for the people behind every move.',
  },
  {
    number: '02',
    title: 'A family perspective',
    copy: 'Shane and Oliver bring a new generation of energy and modern marketing to the local insight that has guided the team for decades. Together, we balance proven judgment with a current approach.',
  },
  {
    number: '03',
    title: 'Advice with empathy',
    copy: 'A real estate decision is rarely only about a property. We make room for the practical details, the financial questions, and the life change behind your next move.',
  },
];

export default function AboutPage() {
  return (
    <main className="editorial-page page-about">
      <section className="editorial-hero about-hero">
        <div className="editorial-hero-index" aria-hidden="true">
          04
        </div>

        <div className="editorial-hero-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              Our story
            </p>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <h1 className="editorial-hero-title">
              Three generations.
              <em>One local commitment.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <p className="editorial-hero-description">
              The Lathrop Team brings decades of Fox Cities experience to one
              of life’s most important decisions—with clear guidance, steady
              communication, and a personal approach.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={270}>
            <Link href="/team" className="btn btn--light">
              Meet the team
            </Link>
          </ScrollReveal>
        </div>

        <div className="editorial-hero-mark" aria-hidden="true">
          L
        </div>

        <div className="editorial-hero-footnote">
          <span>Fox Cities, Wisconsin</span>
          <span className="editorial-hero-footnote-line" />
          <span>Since the beginning</span>
        </div>
      </section>

      <section className="about-story">
        <ScrollReveal className="about-story-aside">
          <span className="editorial-section-number">01 — The Lathrop story</span>
          <span className="about-story-mark" aria-hidden="true">
            3
          </span>
        </ScrollReveal>

        <div className="about-story-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              A family helping families
            </p>

            <h2 className="editorial-section-title">
              Real estate is more
              <em>than a transaction.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} className="about-story-copy">
            <p>
              Real estate has always been a family business for the Lathrop
              Team. Over more than 35 years, Diane Lathrop built a reputation
              for helping Fox Cities families make important moves with
              confidence.
            </p>

            <p>
              Her experience and results place her among the top 0.17% of
              agents in Appleton, with 996 closed sales recorded on Zillow.
              Shane and Oliver joined the business with fresh energy and modern
              marketing, adding a new perspective to deeply rooted local
              knowledge.
            </p>

            <p>
              Together, we bring experience, data, and empathy to each
              relationship—because buying or selling a home is not simply a
              financial decision. It is a life decision.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-heading">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              How we show up
            </p>

            <h2 className="editorial-section-title">
              Grounded locally.
              <em>Focused on you.</em>
            </h2>
          </ScrollReveal>
        </div>

        <div className="about-values-list">
          {teamValues.map((value, index) => (
            <ScrollReveal key={value.number} delay={index * 110}>
              <article className="about-value">
                <span className="about-value-number">{value.number}</span>

                <div className="about-value-content">
                  <h3>{value.title}</h3>
                  <p>{value.copy}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="about-proof">
        <ScrollReveal className="about-proof-heading">
          <p className="editorial-eyebrow editorial-eyebrow--light">
            <span className="editorial-eyebrow-rule" />
            Results you can verify
          </p>

          <h2>
            Documented performance.
            <em>Real client trust.</em>
          </h2>
        </ScrollReveal>

        <div className="about-proof-content">
          <ScrollReveal delay={100} className="about-proof-stat-grid">
            <article className="about-proof-stat">
              <span className="about-proof-stat-value">$27.24M</span>
              <span className="about-proof-stat-label">
                Closed volume in 2024
              </span>
            </article>

            <article className="about-proof-stat">
              <span className="about-proof-stat-value">76</span>
              <span className="about-proof-stat-label">
                Transaction sides in 2024
              </span>
            </article>

            <article className="about-proof-stat">
              <span className="about-proof-stat-value">525+</span>
              <span className="about-proof-stat-label">
                Five-star reviews
              </span>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={220} className="about-proof-copy">
            <p>
              The Lathrop Team’s 2024 production of $27.24M in closed volume
              across 76 transaction sides has been verified by RealTrends, an
              independent industry source that tracks production nationwide.
            </p>

            <p>
              Over the years, clients have shared more than 525 five-star
              reviews on platforms including Zillow and Google. The figures are
              important, but the goal is always the same: that you feel
              informed, supported, and satisfied with the outcome.
            </p>

            <Link href="/reviews" className="text-link">
              Explore our review summary <span aria-hidden="true">↗</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="about-affiliation">
        <ScrollReveal className="about-affiliation-mark" aria-hidden="true">
          KW
        </ScrollReveal>

        <div className="about-affiliation-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              Brokerage affiliation
            </p>

            <h2 className="editorial-section-title">
              Proudly affiliated with
              <em>Keller Williams Fox Cities.</em>
            </h2>

            <p className="about-affiliation-copy">
              We operate as The Lathrop Team with our own identity and
              relationship-first approach, while being proudly affiliated with
              Keller Williams Fox Cities in Appleton. This gives our clients
              the personal attention of a boutique team backed by a major
              brokerage network.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <address className="about-affiliation-address">
              <strong>Keller Williams Fox Cities</strong>
              <span>517 N. Westhill Blvd, Appleton, WI</span>
              <span>Each office is independently owned and operated.</span>
            </address>
          </ScrollReveal>
        </div>
      </section>

      <section className="editorial-closing-cta">
        <ScrollReveal>
          <p className="editorial-eyebrow">
            <span className="editorial-eyebrow-rule" />
            Let’s talk
          </p>

          <h2>
            A local team for
            <em>your next chapter.</em>
          </h2>

          <p>
            Whether you are considering a move soon or simply beginning to
            explore your options, we are here to help you find a clear path.
          </p>

          <Link href="/contact" className="btn">
            Start a conversation
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}