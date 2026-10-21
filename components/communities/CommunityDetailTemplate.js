import Image from 'next/image';
import Link from 'next/link';
import GuidesLeadMagnet from '../forms/GuidesLeadMagnet';
import './community-detail.css';
import './community-image-credits.css';

function CommunityMedia({ image, priority = false }) {
  if (!image.src || image.isPlaceholder) {
    return (
      <div className="community-media-placeholder">
        <span aria-hidden="true" className="community-placeholder-mark">
          L
        </span>
        <p>{image.label}</p>
        <span className="community-placeholder-note">
          Image coming soon
        </span>
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      priority={priority}
      sizes={
        priority
          ? '(max-width: 900px) 100vw, 50vw'
          : '(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw'
      }
      className="community-detail-image"
      style={{ objectPosition: image.objectPosition || 'center' }}
    />
  );
}

function CommunityImageCredit({ image }) {
  if (!image.attribution || !image.src || image.isPlaceholder) {
    return null;
  }

  const {
    title,
    author,
    sourceUrl,
    licenseName,
    licenseUrl,
    changes,
  } = image.attribution;

  return (
    <figcaption className="community-image-credit">
      <a href={sourceUrl}>{title}</a>
      {' — Photo by '}
      <span>{author}</span>
      {' / Wikimedia Commons / '}
      <a href={licenseUrl} rel="license">
        {licenseName}
      </a>
      {changes && (
        <span className="community-image-credit-changes">
          {changes}
        </span>
      )}
    </figcaption>
  );
}

function CommunityHero({ community }) {
  return (
    <section
      className="community-detail-hero"
      aria-labelledby="community-title"
    >
      <div className="community-detail-hero-content">
        <Link href="/communities" className="community-back-link">
          <span aria-hidden="true">←</span> All communities
        </Link>

        <p className="community-detail-eyebrow">
          Fox Cities communities / {community.index}
        </p>

        <h1 id="community-title">{community.name}</h1>

        <p className="community-detail-hero-copy">
          {community.intro}
        </p>

        <div className="community-detail-hero-actions">
          <a href="#buyers-sellers-guides" className="btn btn--light">
            Get the Buyer’s &amp; Seller’s Guides
          </a>
        </div>
      </div>

      <figure className="community-hero-figure">
        <div className="community-detail-hero-media">
          <CommunityMedia image={community.heroImage} priority />
        </div>

        <CommunityImageCredit image={community.heroImage} />
      </figure>
    </section>
  );
}

function CommunityOverview({ community }) {
  return (
    <section
      className="community-detail-section community-detail-overview"
      aria-labelledby="community-overview-title"
    >
      <div>
        <p className="community-detail-eyebrow">
          01 — Local perspective
        </p>
        <h2 id="community-overview-title">
          Get to know {community.name}.
        </h2>
      </div>

      <div className="community-detail-overview-copy">
        <p>{community.overview}</p>
      </div>
    </section>
  );
}

function CommunityStats({ community }) {
  return (
    <section
      className="community-detail-section community-detail-market"
      aria-labelledby="community-market-title"
    >
      <div className="community-detail-section-heading">
        <p className="community-detail-eyebrow">
          02 — Market context
        </p>
        <h2 id="community-market-title">
          {community.name}, by the numbers.
        </h2>
        <p className="community-detail-section-copy">
          Verified market figures will be added here. Until then, all
          statistics below are clearly marked as placeholders.
        </p>
      </div>

      <dl className="community-stat-grid">
        {community.stats.map((stat) => (
          <div className="community-stat-card" key={stat.label}>
            <dt>{stat.label}</dt>
            <dd className="community-stat-value">{stat.value}</dd>

            {stat.period && (
              <dd className="community-stat-note">
                {stat.period}
              </dd>
            )}

            {stat.source && (
              <dd className="community-stat-note">
                Source: {stat.source}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}

function CommunityPropertyGallery({ community }) {
  return (
    <section
      className="community-detail-section community-detail-properties"
      aria-labelledby="community-properties-title"
    >
      <div className="community-detail-section-heading">
        <p className="community-detail-eyebrow">03 — Properties</p>
        <h2 id="community-properties-title">
          A closer look at {community.name}.
        </h2>
        <p className="community-detail-section-copy">
          Explore the photo gallery for {community.name}. For current
          property availability, contact the Lathrop Team.
        </p>
      </div>

      <div className="community-property-grid">
        {community.propertyGallery.map((image, index) => (
          <figure
            className="community-gallery-figure"
            key={`${community.slug}-property-${index}`}
          >
            <div className="community-property-media">
              <CommunityMedia image={image} />
            </div>

            <CommunityImageCredit image={image} />
          </figure>
        ))}
      </div>
    </section>
  );
}

function CommunityFinalCta({ community }) {
  return (
    <section
      className="community-detail-section community-detail-final"
      aria-labelledby="community-final-title"
    >
      <p className="community-detail-eyebrow">Your next chapter</p>
      <h2 id="community-final-title">{community.finalCta.title}</h2>

      <p className="community-detail-section-copy">
        {community.finalCta.copy}
      </p>

      <Link href={community.finalCta.href} className="btn btn--light">
        {community.finalCta.label}
      </Link>
    </section>
  );
}

export default function CommunityDetailTemplate({ community }) {
  return (
    <main className="community-detail-page">
      <CommunityHero community={community} />
      <CommunityOverview community={community} />
      <CommunityStats community={community} />
      <CommunityPropertyGallery community={community} />
      <GuidesLeadMagnet />
      <CommunityFinalCta community={community} />
    </main>
  );
}