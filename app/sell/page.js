import Link from 'next/link';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const metadata = {
  title: 'Sell Your Fox Cities Home | Lathrop Team',
  description:
    'Sell your Fox Cities home with a three-generation team, RealTrends Verified 2024 performance, and a clear plan from valuation through closing.',
};

const sellingSteps = [
  {
    number: '01',
    title: 'Price with perspective',
    copy: 'We evaluate recent local sales, current market conditions, your home’s updates, and its individual strengths. The goal is a realistic pricing strategy—not a generic automated estimate.',
  },
  {
    number: '02',
    title: 'Prepare with purpose',
    copy: 'We help you identify the improvements, presentation decisions, and staging priorities most likely to support your sale, so time and budget are focused where they matter.',
  },
  {
    number: '03',
    title: 'Launch with intention',
    copy: 'Your home is positioned with professional presentation, listing syndication, targeted digital exposure, and direct communication with our network of buyers and local agents.',
  },
  {
    number: '04',
    title: 'Negotiate to the finish',
    copy: 'From offers and counteroffers to inspections and closing details, we manage the moving parts with a focus on your timeline, terms, and net outcome.',
  },
];

export default function SellPage() {
  return (
    <main className="editorial-page page-sell">
      <section className="editorial-hero sell-hero">
        <div className="editorial-hero-index" aria-hidden="true">
          02
        </div>

        <div className="editorial-hero-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              Sell with confidence
            </p>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <h1 className="editorial-hero-title">
              Your home deserves
              <em>a considered next step.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <p className="editorial-hero-description">
              From valuation through closing, we bring a clear strategy,
              experienced negotiation, and close communication to every Fox
              Cities sale.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={270}>
            <div className="editorial-hero-actions">
              <Link href="/home-valuation" className="btn btn--light">
                Get your home value
              </Link>
              <a href="#selling-process" className="btn btn--outline-light">
                Explore the process
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="editorial-hero-mark" aria-hidden="true">
          S
        </div>

        <div className="editorial-hero-footnote">
          <span>Fox Cities, Wisconsin</span>
          <span className="editorial-hero-footnote-line" />
          <span>Seller representation</span>
        </div>
      </section>

      <section className="sell-proof">
        <ScrollReveal className="sell-proof-intro">
          <p className="editorial-eyebrow">
            <span className="editorial-eyebrow-rule" />
            Performance with context
          </p>

          <p className="sell-proof-lead">
            A successful sale requires more than putting a property online. It
            takes accurate positioning, thoughtful presentation, and someone
            who can guide important decisions without adding pressure.
          </p>
        </ScrollReveal>

        <div className="sell-proof-stats" aria-label="Lathrop Team performance">
          <ScrollReveal delay={100}>
            <article className="sell-proof-stat">
              <span className="sell-proof-stat-value">$27.24M</span>
              <span className="sell-proof-stat-label">
                Closed volume in 2024
              </span>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <article className="sell-proof-stat">
              <span className="sell-proof-stat-value">76</span>
              <span className="sell-proof-stat-label">
                Transaction sides in 2024
              </span>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={260}>
            <article className="sell-proof-stat">
              <span className="sell-proof-stat-value">21+</span>
              <span className="sell-proof-stat-label">
                Years of Fox Cities experience
              </span>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={340} className="sell-proof-note">
          <span>RealTrends Verified</span>
          <p>
            Our 2024 production has been independently verified by RealTrends.
            It is proof of a process built through consistent local work—not a
            one-season result.
          </p>
        </ScrollReveal>
      </section>

      <section className="sell-process" id="selling-process">
        <ScrollReveal className="sell-process-aside">
          <span className="editorial-section-number">01 — The plan</span>
          <span className="sell-process-mark" aria-hidden="true">
            4
          </span>
        </ScrollReveal>

        <div className="sell-process-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              A clear four-step process
            </p>

            <h2 className="editorial-section-title">
              From first
              <em>conversation to closing.</em>
            </h2>
          </ScrollReveal>

          <div className="sell-process-list">
            {sellingSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 110}>
                <article className="sell-process-step">
                  <span className="sell-process-step-number">
                    {step.number}
                  </span>

                  <div className="sell-process-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sell-valuation-band">
        <div className="sell-valuation-frame" aria-hidden="true">
          <span className="sell-valuation-frame-number">Value / 01</span>
          <span className="sell-valuation-frame-mark">L</span>
          <span className="sell-valuation-frame-label">
            A local perspective
          </span>
        </div>

        <div className="sell-valuation-content">
          <ScrollReveal>
            <p className="editorial-eyebrow editorial-eyebrow--light">
              <span className="editorial-eyebrow-rule" />
              Begin with clarity
            </p>

            <h2 className="editorial-section-title">
              What is your home
              <em>really worth?</em>
            </h2>

            <p className="sell-valuation-copy">
              Start with a personalized valuation from a team that knows the
              local market. We will look beyond an online estimate and help you
              understand the real factors shaping your home’s position today.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <Link href="/home-valuation" className="text-link">
              Request your home valuation <span aria-hidden="true">↗</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="editorial-closing-cta">
        <ScrollReveal>
          <p className="editorial-eyebrow">
            <span className="editorial-eyebrow-rule" />
            Your next move
          </p>

          <h2>
            Let’s make your
            <em>next chapter count.</em>
          </h2>

          <p>
            Share a little about your home and your timeline. We will help you
            map a clear path forward.
          </p>

          <Link href="/home-valuation" className="btn">
            Get your home value
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}