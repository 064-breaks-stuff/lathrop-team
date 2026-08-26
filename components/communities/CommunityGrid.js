import communities from '../../data/communities';

export default function CommunityGrid() {
  return (
    <div className="community-grid">
      {communities.map((community) => (
        <article key={community.id} className="community-card">
          <p className="section-eyebrow">Fox Cities</p>

          <h3 className="community-name">{community.name}</h3>

          <p className="community-blurb">{community.blurb}</p>

          <span className="community-card-arrow" aria-hidden="true">
            →
          </span>
        </article>
      ))}
    </div>
  );
}