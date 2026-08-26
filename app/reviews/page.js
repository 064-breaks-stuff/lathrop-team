import Link from 'next/link';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const metadata = {
  title: 'Reviews | Lathrop Team',
  description:
    'Learn about the 525+ five-star reviews shared by buyers and sellers who have worked with the Lathrop Team in the Fox Cities.',
};

const reviewThemes = [
  {
    number: '01',
    title: 'Clear communication',
    copy: 'Clients consistently point to responsiveness and straightforward updates throughout the buying or selling process.',
  },
  {
    number: '02',
    title: 'Local market knowledge',
    copy: 'Decades of Fox Cities experience help bring useful context to pricing, neighborhoods, timing, and negotiation.',
  },
  {
    number: '03',
    title: 'A manageable process',
    copy: 'Real estate can be complex. Our goal is to make the next step understandable and keep the moving pieces organized.',
  },
];

export default function ReviewsPage() {
  return (
    <main className="editorial-page page-reviews">
      <section className="editorial-hero reviews-hero">
        <div className="editorial-hero-index" aria-hidden="true">
          07
        </div>

        <div className="editorial-hero-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              Client feedback
            </p>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <h1 className="editorial-hero-title">
              Trust is built
              <em>one move at a time.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <p className="editorial-hero-description">
              More than 525 five-star reviews reflect the relationships the
              Lathrop Team has built with buyers and sellers throughout the Fox
              Cities.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={270}>
            <Link href="/contact" className="btn btn--light">
              Start a conversation
            </Link>
          </ScrollReveal>
        </div>

        <div className="editorial-hero-mark" aria-hidden="true">
          5
        </div>

        <div className="editorial-hero-footnote">
          <span>Fox Cities, Wisconsin</span>
          <span className="editorial-hero-footnote-line" />
          <span>525+ five-star reviews</span>
        </div>
      </section>

      <section className="reviews-intro">
        <ScrollReveal className="reviews-intro-aside">
          <span className="editorial-section-number">01 — The experience</span>
          <span className="reviews-intro-mark" aria-hidden="true">
            ★
          </span>
        </ScrollReveal>

        <div className="reviews-intro-content">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              A record of trust
            </p>

            <h2 className="editorial-section-title">
              The work matters.
              <em>So does how it feels.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} className="reviews-intro-copy">
            <p>
              Over the years, clients have shared more than 525 five-star
              reviews on platforms including Zillow and Google. That feedback
              reflects the care, preparation, and communication we bring to
              every transaction.
            </p>

            <p>
              Results matter, but so does the experience of getting there. Our
              goal is for you to feel informed, supported, and confident in the
              decisions ahead.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="reviews-themes">
        <div className="reviews-themes-heading">
          <ScrollReveal>
            <p className="editorial-eyebrow">
              <span className="editorial-eyebrow-rule" />
              What clients value
            </p>

            <h2 className="editorial-section-title">
              The qualities that
              <em>come up most often.</em>
            </h2>
          </ScrollReveal>
        </div>

        <div className="reviews-themes-list">
          {reviewThemes.map((theme, index) => (
            <ScrollReveal key={theme.number} delay={index * 110}>
              <article className="reviews-theme">
                <span className="reviews-theme-number">{theme.number}</span>

                <div className="reviews-theme-content">
                  <h3>{theme.title}</h3>
                  <p>{theme.copy}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="reviews-coming-soon">
        <div className="reviews-coming-soon-visual" aria-hidden="true">
          <div className="reviews-coming-soon-frame">
            <span className="reviews-coming-soon-frame-index">Stories / 01</span>
            <span className="reviews-coming-soon-frame-mark">★</span>
            <span className="reviews-coming-soon-frame-label">
              Fox Cities clients
            </span>
          </div>
        </div>

        <div className="reviews-coming-soon-content">
          <ScrollReveal>
            <p className="editorial-eyebrow editorial-eyebrow--light">
              <span className="editorial-eyebrow-rule" />
              Client stories coming soon
            </p>

            <h2>
              Real experiences
              <em>deserve real words.</em>
            </h2>

            <p>
              We are preparing a selection of approved client stories to share
              here. Until then, our 525+ five-star review record remains a
              meaningful reflection of the trust clients have placed in our
              team.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <Link href="/contact" className="text-link">
              Talk with the Lathrop Team <span aria-hidden="true">↗</span>
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
            Let’s make the process
            <em>feel more manageable.</em>
          </h2>

          <p>
            Whether you are buying, selling, or thinking ahead, we are here to
            answer questions and help you create a clear plan.
          </p>

          <Link href="/contact" className="btn">
            Start a conversation
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}