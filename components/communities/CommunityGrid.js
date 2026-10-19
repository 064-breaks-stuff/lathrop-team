import Image from 'next/image';
import Link from 'next/link';
import communities from '../../data/communities';
import ScrollReveal from '../ui/ScrollReveal';
import './community-detail.css';
import './community-directory-images.css';

function CommunityPhotoCredit({ image }) {
  if (!image?.src || image.isPlaceholder || !image.attribution) {
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
    <div className="community-directory-photo-credit">
      <p>
        <a href={sourceUrl}>{title}</a>
        {' — Photo by '}
        <span>{author}</span>
        {' / Wikimedia Commons / '}
        <a href={licenseUrl} rel="license">
          {licenseName}
        </a>
      </p>

      {changes && (
        <p className="community-directory-photo-changes">
          {changes}
        </p>
      )}
    </div>
  );
}

export default function CommunityGrid() {
  return (
    <div className="editorial-community-grid">
      {communities.map((community, index) => {
        const image = community.heroImage;
        const hasImage = Boolean(image?.src && !image.isPlaceholder);

        return (
          <ScrollReveal
            key={community.id}
            delay={(index % 4) * 90}
            className="community-directory-item"
          >
            <article className="community-directory-photo-card">
              <Link
                href={`/communities/${community.slug}`}
                className="editorial-community-card community-directory-link community-directory-photo-link"
              >
                <div className="community-directory-photo-media">
                  {hasImage ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 760px) 50vw, (max-width: 1100px) 33vw, 25vw"
                      className="community-directory-photo"
                      style={{
                        objectPosition: image.objectPosition || 'center',
                      }}
                    />
                  ) : (
                    <div className="community-directory-photo-placeholder">
                      <span aria-hidden="true">
                        {community.initial}
                      </span>
                      <p>{community.name} image coming soon</p>
                    </div>
                  )}
                </div>

                <div className="editorial-community-card-content">
                  <div className="editorial-community-card-header">
                    <p>Fox Cities</p>
                    <span>{community.index}</span>
                  </div>

                  <h2>{community.name}</h2>

                  <p className="community-directory-photo-descriptor">
                    {community.descriptor}
                  </p>

                  <p className="editorial-community-blurb">
                    {community.blurb}
                  </p>

                  <span
                    className="editorial-community-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </Link>

              <CommunityPhotoCredit image={image} />
            </article>
          </ScrollReveal>
        );
      })}
    </div>
  );
}