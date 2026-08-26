import Link from 'next/link';
import Button from '../../components/ui/Button';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const metadata = {
  title: 'Buy in the Fox Cities | Lathrop Team',
  description:
    'Buy in the Fox Cities with a three-generation real estate team offering local guidance, data-backed advice, and steady support from search to closing.',
};

const buyerPillars = [
  {
    number: '01',
    title: 'Local perspective',
    copy: 'Three generations in the Fox Cities means we understand more than a map pin. We help you weigh the character of each neighborhood, everyday routines, resale considerations, and the details that make one street feel different from the next.',
  },
  {
    number: '02',
    title: 'Clearer decisions',
    copy: 'A strong offer is not simply the highest number. We use current market context, recent sales, property condition, and your priorities to help you move forward with clarity.',
  },
  {
    number: '03',
    title: 'Support that stays close',
    copy: 'From early lender conversations through inspections, negotiations, and closing, we coordinate the moving parts and keep you informed at every stage.',
  },
];

export default function BuyPage() {
  return (
    <main className="editorial-page page-buy">
      <section className="editorial-hero">
        <div className="editorial-hero-index" aria-hidden="true">
          01
        </div>

        <div className="editorial-hero-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              Buy with Lathrop Team
            </p>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <h1 className="editorial-hero-title">
              Find the place
              <em>that feels like home.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <p className="editorial-hero-description">
              Buying in the Fox Cities should feel informed, personal, and
              well-paced. We bring decades of local perspective to every
              search, offer, and next step.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={270}>
            <div className="editorial-hero-actions">
              <Link href="/contact" className="btn btn--light">
                Start a conversation
              </Link>
              <a href="#buyer-guide" className="btn btn--outline-light">
                Explore the process
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="editorial-hero-mark" aria-hidden="true">
          B
        </div>

        <div className="editorial-hero-footnote">
          <span>Fox Cities, Wisconsin</span>
          <span className="editorial-hero-footnote-line" />
          <span>Buyer representation</span>
        </div>
      </section>

      <section className="editorial-intro">
        <ScrollReveal className="editorial-intro-aside">
          <span className="editorial-section-number">01 — The search</span>
          <span className="editorial-intro-mark" aria-hidden="true">
            L
          </span>
        </ScrollReveal>

        <div className="editorial-intro-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              A team, not just an agent
            </p>

            <h2 className="editorial-section-title">
              Local knowledge makes
              <em>the difference.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} className="editorial-intro-copy">
            <p>
              We have lived and worked in the Fox Cities for decades. We know
              the streets, schools, commutes, and small details that do not
              appear in a search filter.
            </p>
            <p>
              Whether you are moving across town, relocating to the area, or
              preparing for your first purchase, we help you understand your
              options before you feel pressure to decide.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="buyer-pillars" aria-label="How we support buyers">
        <div className="buyer-pillars-heading">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              How we guide buyers
            </p>

            <h2 className="editorial-section-title">
              A steadier way
              <em>to move forward.</em>
            </h2>
          </ScrollReveal>
        </div>

        <div className="buyer-pillars-list">
          {buyerPillars.map((pillar, index) => (
            <ScrollReveal key={pillar.number} delay={index * 110}>
              <article className="buyer-pillar">
                <span className="buyer-pillar-number">{pillar.number}</span>
                <div className="buyer-pillar-content">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.copy}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="buyer-guide" id="buyer-guide">
        <div className="buyer-guide-visual" aria-hidden="true">
          <div className="buyer-guide-frame">
            <span className="buyer-guide-frame-index">Guide / 01</span>
            <span className="buyer-guide-frame-title">Fox Cities</span>
            <span className="buyer-guide-frame-subtitle">Buyer’s Guide</span>
          </div>
        </div>

        <div className="buyer-guide-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              Coming soon
            </p>

            <h2 className="editorial-section-title">
              The Fox Cities
              <em>Buyer’s Guide.</em>
            </h2>

            <p className="buyer-guide-copy">
              We are preparing a practical guide to buying in the Fox Cities:
              neighborhood context, the buying timeline, and what to expect at
              each important step. Join the list, and we will send it when it
              is ready.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <Link href="/contact" className="text-link">
              Reserve your copy <span aria-hidden="true">↗</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="editorial-closing-cta">
        <ScrollReveal>
          <p className="editorial-eyebrow editorial-eyebrow--light">
            <span className="editorial-eyebrow-rule" />
            Your next move
          </p>

          <h2>
            Ready to start
            <em>seeing homes?</em>
          </h2>

          <p>
            Tell us what you are looking for. We will help you create a clear,
            thoughtful plan for the search ahead.
          </p>

          <Link href="/contact" className="btn btn--light">
            Schedule a consultation
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}