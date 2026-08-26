import team from '../../data/team';

export default function TeamGrid() {
  return (
    <div className="team-grid">
      {team.map((member) => (
        <article key={member.id} className="team-card">
          <div className="team-card-image-placeholder" aria-hidden="true">
            <span>{member.name.charAt(0)}</span>
          </div>

          <div className="team-card-content">
            <p className="section-eyebrow">{member.role}</p>

            <h3 className="team-name">{member.name}</h3>

            {member.license && (
              <p className="team-license">
                License #{member.license}
              </p>
            )}

            <p className="team-bio">{member.bio}</p>

            <div className="team-contact">
              <a
                href={`mailto:${member.email}`}
                className="link"
              >
                {member.email}
              </a>

              <a
                href={`tel:${member.phone.replace(/\D/g, '')}`}
                className="link"
              >
                {member.phone}
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}