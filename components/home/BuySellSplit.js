import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

export default function BuySellSplit() {
  return (
    <section className="home-pathways">
      <div className="home-pathway home-pathway--buy">
        <div className="home-pathway-number">01</div>

        <ScrollReveal>
          <p className="section-eyebrow">For buyers</p>

          <h2 className="home-pathway-title">
            Find your
            <br />
            next chapter.
          </h2>

          <p className="home-pathway-copy">
            From the first search to the final signature, we bring local
            knowledge, clear advice, and steady support to the buying process.
          </p>

          <Link href="/buy" className="btn btn--light">
            Start your home search
          </Link>
        </ScrollReveal>
      </div>

      <div className="home-pathway home-pathway--sell">
        <div className="home-pathway-number">02</div>

        <ScrollReveal delay={180}>
          <p className="section-eyebrow">For sellers</p>

          <h2 className="home-pathway-title">
            Move forward
            <br />
            with confidence.
          </h2>

          <p className="home-pathway-copy">
            From valuation and preparation to marketing and negotiation, we
            create a clear plan for your sale and manage every detail with care.
          </p>

          <Link href="/home-valuation" className="btn btn--outline-light">
            Get your home valuation
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}