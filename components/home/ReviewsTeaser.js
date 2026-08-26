import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

export default function ReviewsTeaser() {
  return (
    <section className="home-reviews">
      <div className="home-reviews-aside">
        <span className="section-eyebrow">Client perspective</span>
        <span className="home-reviews-aside-mark" aria-hidden="true">
          ✦
        </span>
      </div>

      <div className="home-reviews-content">
        <ScrollReveal>
          <h2 className="home-reviews-title">
            525+
            <span>five-star reviews</span>
          </h2>

          <p className="home-reviews-copy">
            Buyers and sellers have shared their experiences on platforms
            including Zillow and Google. Their words speak to our communication,
            availability, and market knowledge.
          </p>

          <Link href="/reviews" className="text-link">
            Read what clients say
            <span aria-hidden="true">↗</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}