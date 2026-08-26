import Link from 'next/link';
import communities from '../../data/communities';
import ScrollReveal from '../ui/ScrollReveal';

export default function CommunitiesTeaser() {
  return (
    <section className="home-communities">
      <div className="home-communities-header">
        <ScrollReveal>
          <p className="section-eyebrow">Where we work</p>

          <h2 className="home-section-title">
            The Fox Cities,
            <br />
            with local perspective.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <div className="home-communities-description">
            <p>
              Each community has its own rhythm, character, and opportunities.
              We’ll help you understand the details before you make a decision.
            </p>

            <Link href="/communities" className="text-link">
              Explore communities
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={240}>
        <div className="home-community-rail">
          {communities.map((community, index) => (
            <Link
              href={`/communities#${community.id}`}
              key={community.id}
              className="home-community-card"
            >
              <span className="home-community-index">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="home-community-name">{community.name}</span>

              <span className="home-community-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}