import ScrollReveal from '../../components/ui/ScrollReveal';
import ValuationForm from '../../components/forms/ValuationForm';

export const metadata = {
  title: 'Home Valuation | Lathrop Team',
  description:
    'Get a personalized valuation for your Fox Cities home from a three-generation team with 35+ years of local market experience.',
};

const valuationConsiderations = [
  {
    number: '01',
    title: 'The immediate market',
    copy: 'We look at the homes currently competing for buyers, the recent sales setting expectations, and the direction the local market is moving.',
  },
  {
    number: '02',
    title: 'Your home in context',
    copy: 'Updates, condition, lot, layout, location, and the details buyers notice all matter. Square footage alone cannot tell the full story.',
  },
  {
    number: '03',
    title: 'A practical next step',
    copy: 'You receive a realistic perspective to help you plan—whether you are preparing to sell soon, considering a future move, or simply looking for clarity.',
  },
];

export default function HomeValuationPage() {
  return (
    <main className="editorial-page page-valuation">
      <section className="editorial-hero valuation-hero">
        <div className="editorial-hero-index" aria-hidden="true">
          03
        </div>

        <div className="editorial-hero-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              Home valuation
            </p>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <h1 className="editorial-hero-title">
              See your home
              <em>with local perspective.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <p className="editorial-hero-description">
              Online estimates are a starting point. A thoughtful valuation
              considers your home, your neighborhood, and the real choices in
              front of you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={270} className="editorial-hero-actions">
            <a href="#valuation-form" className="btn btn--light">
              Get your home value
            </a>
          </ScrollReveal>
        </div>

        <div className="editorial-hero-mark" aria-hidden="true">
          V
        </div>

        <div className="editorial-hero-footnote">
          <span>Fox Cities, Wisconsin</span>
          <span className="editorial-hero-footnote-line" />
          <span>Personalized valuation</span>
        </div>
      </section>

      <section className="valuation-intro">
        <ScrollReveal className="valuation-intro-aside">
          <span className="editorial-section-number">01 — Beyond an estimate</span>
          <span className="valuation-intro-mark" aria-hidden="true">
            L
          </span>
        </ScrollReveal>

        <div className="valuation-intro-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              A more complete picture
            </p>

            <h2 className="editorial-section-title">
              A number should come
              <em>with an explanation.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} className="valuation-intro-copy">
            <p>
              A home value is more than an online estimate. It is a market
              position shaped by timing, location, condition, presentation, and
              the homes buyers are comparing yours against.
            </p>
            <p>
              With more than 35 years of Fox Cities experience, the Lathrop Team
              gives you a clear, local perspective before you decide what comes
              next.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="valuation-considerations">
        <div className="valuation-considerations-heading">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              What we consider
            </p>

            <h2 className="editorial-section-title">
              Built around your
              <em>specific property.</em>
            </h2>
          </ScrollReveal>
        </div>

        <div className="valuation-considerations-list">
          {valuationConsiderations.map((consideration, index) => (
            <ScrollReveal key={consideration.number} delay={index * 110}>
              <article className="valuation-consideration">
                <span className="valuation-consideration-number">
                  {consideration.number}
                </span>

                <div className="valuation-consideration-content">
                  <h3>{consideration.title}</h3>
                  <p>{consideration.copy}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="valuation-form-section" id="valuation-form">
        <div className="valuation-form-intro">
          <ScrollReveal>
            <p className="editorial-eyebrow editorial-eyebrow--light">
              <span className="editorial-eyebrow-rule" />
              Request your valuation
            </p>

            <h2>
              Tell us a little
              <em>about your home.</em>
            </h2>

            <p>
              Share the basics below. We will review your property details and
              follow up with a personalized valuation—not an automated number.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <div className="valuation-form-assurance">
              <span>What happens next</span>
              <p>
                A member of the Lathrop Team will review your details and
                follow up personally to discuss your home and timing.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={180} className="valuation-form-panel">
          <ValuationForm />
        </ScrollReveal>
      </section>
    </main>
  );
}