import team from '../../data/team';
import ScrollReveal from '../ui/ScrollReveal';

export default function TeamGrid() {
  return (
    <div className="editorial-team-grid">
      {team.map((member, index) => (
        <ScrollReveal key={member.id} delay={index * 110}>
          <article className="editorial-team-card">
            <div
              className={`editorial-team-portrait editorial-team-portrait--${member.id}`}
              aria-hidden="true"
            >
              <span className="editorial-team-portrait-index">{member.index}</span>

              <span className="editorial-team-portrait-initial">
                {member.initial}
              </span>

              <div className="editorial-team-portrait-frame" />

              <span className="editorial-team-portrait-descriptor">
                {member.descriptor}
              </span>
            </div>

            <div className="editorial-team-card-content">
              <div className="editorial-team-card-header">
                <div>
                  <p className="editorial-team-role">{member.role}</p>
                  <h2>{member.name}</h2>
                </div>

                <span className="editorial-team-card-index">{member.index}</span>
              </div>

              <div className="editorial-team-stat">
                <span className="editorial-team-stat-value">{member.stat}</span>
                <span className="editorial-team-stat-label">{member.statLabel}</span>
              </div>

              <p className="editorial-team-bio">{member.bio}</p>

              <div className="editorial-team-contact">
                <a href={`mailto:${member.email}`}>{member.email}</a>
                <a href={`tel:${member.phoneHref}`}>{member.phone}</a>
              </div>

              {member.license && (
                <p className="editorial-team-license">
                  License #{member.license}
                </p>
              )}
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}