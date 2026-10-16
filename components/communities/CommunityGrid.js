import Link from 'next/link';
import communities from '../../data/communities';
import ScrollReveal from '../ui/ScrollReveal';
import './community-detail.css';

export default function CommunityGrid() {
  return (
    <div className="editorial-community-grid">
      {communities.map((community, index) => (
        <ScrollReveal key={community.id} delay={(index % 4) * 90}>
          <Link
            href={`/communities/${community.slug}`}
            className="editorial-community-card community-directory-link"
          >
            <div
              className={`editorial-community-visual editorial-community-visual--${community.id}`}
              aria-hidden="true"
            >
              <span className="editorial-community-index">
                {community.index}
              </span>

              <span className="editorial-community-initial">
                {community.initial}
              </span>

              <div className="editorial-community-frame" />

              <span className="editorial-community-descriptor">
                {community.descriptor}
              </span>
            </div>

            <div className="editorial-community-card-content">
              <div className="editorial-community-card-header">
                <p>Fox Cities</p>
                <span>{community.index}</span>
              </div>

              <h2>{community.name}</h2>

              <p className="editorial-community-blurb">
                {community.blurb}
              </p>

              <span className="editorial-community-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
}