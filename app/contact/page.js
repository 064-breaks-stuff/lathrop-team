import ScrollReveal from '../../components/ui/ScrollReveal';
import ContactForm from '../../components/forms/ContactForm';

export const metadata = {
  title: 'Contact | Lathrop Team',
  description:
    'Contact the Lathrop Team to discuss buying, selling, or your next move in the Fox Cities.',
};

const directContacts = [
  {
    name: 'Diane Lathrop',
    role: 'Realtor®',
    email: 'diane@lathropteam.com',
    phone: '(920) 428-9227',
    phoneHref: '+19204289227',
  },
  {
    name: 'Shane Lathrop',
    role: 'Realtor®',
    email: 'shane@lathropteam.com',
    phone: '(920) 428-0066',
    phoneHref: '+19204280066',
  },
  {
    name: 'Oliver Lathrop',
    role: 'Realtor®',
    email: 'oliver@lathropteam.com',
    phone: '(920) 858-4424',
    phoneHref: '+19208584424',
  },
];

export default function ContactPage() {
  return (
    <main className="editorial-page page-contact">
      <section className="editorial-hero contact-hero">
        <div className="editorial-hero-index" aria-hidden="true">
          08
        </div>

        <div className="editorial-hero-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              Contact the Lathrop Team
            </p>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <h1 className="editorial-hero-title">
              Let’s talk about
              <em>what comes next.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <p className="editorial-hero-description">
              Whether you are buying, selling, or simply starting to explore
              your options, we are here to listen and help you find a clearer
              path forward.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={270}>
            <a href="#contact-form" className="btn btn--light">
              Send us a message
            </a>
          </ScrollReveal>
        </div>

        <div className="editorial-hero-mark" aria-hidden="true">
          C
        </div>

        <div className="editorial-hero-footnote">
          <span>Fox Cities, Wisconsin</span>
          <span className="editorial-hero-footnote-line" />
          <span>Buying · Selling · Planning</span>
        </div>
      </section>

      <section className="contact-intro">
        <ScrollReveal className="contact-intro-aside">
          <span className="editorial-section-number">01 — Start here</span>
          <span className="contact-intro-mark" aria-hidden="true">
            L
          </span>
        </ScrollReveal>

        <div className="contact-intro-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              A conversation, not a commitment
            </p>

            <h2 className="editorial-section-title">
              Clear guidance starts
              <em>with a simple hello.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} className="contact-intro-copy">
            <p>
              Every move begins in a different place. You may be ready to start
              searching, preparing to sell, or simply looking for a better
              understanding of the market.
            </p>

            <p>
              Tell us a little about what you are considering. The Lathrop Team
              will follow up personally to answer questions and help you
              identify the right next step.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="contact-form-section" id="contact-form">
        <div className="contact-form-intro">
          <ScrollReveal>
            <p className="editorial-eyebrow editorial-eyebrow--light">
              <span className="editorial-eyebrow-rule" />
              Send a message
            </p>

            <h2>
              How can we
              <em>help you move?</em>
            </h2>

            <p>
              Share a few details below. We will review your message and follow
              up personally as soon as we can.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <div className="contact-form-assurance">
              <span>Prefer to speak directly?</span>
              <p>
                You can contact any member of the Lathrop Team by phone or
                email using the details below.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={180} className="contact-form-panel">
          <ContactForm />
        </ScrollReveal>
      </section>

      <section className="contact-direct-section">
        <ScrollReveal className="contact-direct-heading">
          <p className="editorial-eyebrow">
            <span className="editorial-eyebrow-rule" />
            Direct contact
          </p>

          <h2 className="editorial-section-title">
            Reach out to
            <em>the team directly.</em>
          </h2>
        </ScrollReveal>

        <div className="contact-direct-grid">
          {directContacts.map((person, index) => (
            <ScrollReveal key={person.email} delay={index * 110}>
              <article className="contact-direct-card">
                <div className="contact-direct-card-header">
                  <div>
                    <p>{person.role}</p>
                    <h3>{person.name}</h3>
                  </div>

                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className="contact-direct-card-links">
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                  <a href={`tel:${person.phoneHref}`}>{person.phone}</a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="contact-office">
        <ScrollReveal className="contact-office-mark" aria-hidden="true">
          KW
        </ScrollReveal>

        <div className="contact-office-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              Brokerage office
            </p>

            <h2 className="editorial-section-title">
              Keller Williams
              <em>Fox Cities.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <address className="contact-office-address">
              <strong>Keller Williams Fox Cities</strong>
              <span>517 N. Westhill Blvd, Appleton, WI</span>
              <span>Each office is independently owned and operated.</span>
            </address>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}