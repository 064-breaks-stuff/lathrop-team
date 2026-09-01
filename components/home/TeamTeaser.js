import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

export default function TeamTeaser() {
  return (
    <section className="home-team">
      <div className="home-team-image-wrap">
        <img
          src="/hero/hero2.jpg"
          alt="The Fox Cities area served by the Lathrop Team"
          className="home-team-image"
        />

        <div className="home-team-image-caption">
          <span>The Lathrop Team</span>
          <span>Appleton, Wisconsin</span>
        </div>
      </div>

      <div className="home-team-content">
        <ScrollReveal>
          <p className="section-eyebrow">Meet the team</p>

          <h2 className="home-section-title">
            A family helping
            <br />
            families.
          </h2>

          <p className="home-team-copy">
            Diane, Shane, and Oliver Lathrop represent three generations in
            real estate. That depth shows up in how we price, how we negotiate,
            and how we support you through the process.
          </p>

          <Link href="/team" className="text-link">
            Meet Diane, Shane, and Oliver
            <span aria-hidden="true">↗</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}