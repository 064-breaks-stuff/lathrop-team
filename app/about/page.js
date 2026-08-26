import SectionHeading from '../../components/ui/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const metadata = {
  title: 'About Lathrop Team | Fox Cities Real Estate',
  description:
    'Learn the story behind the Lathrop Team, a three-generation Fox Cities real estate team.',
};

export default function AboutPage() {
  return (
    <section className="page page-about">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Our story"
          title="The Lathrop Team story"
        />
      </ScrollReveal>

      <div className="page-body">
        <ScrollReveal delay={200}>
          <p>
            Real estate is more than a job for us—it’s a family business. Over
            35+ years, Diane Lathrop built a reputation as one of Appleton’s top
            agents. Her experience and results place her among the top 0.17% of
            agents in the area, with 996 closed sales recorded on Zillow.
          </p>

          <p>
            Shane and Oliver joined her in the business, adding fresh energy and
            modern marketing to the deep local knowledge she’s developed.
            Together, we form a team that blends experience, data, and empathy.
            We know that buying or selling is a major life event, and we handle
            each transaction with that in mind.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <h3>Recognized performance, reviewed by real clients</h3>

          <p>
            Our team’s 2024 production—$27.24M in closed volume across 76
            transaction sides—has been verified by RealTrends, an independent
            industry source that analyzes real estate teams. Over the years,
            clients have shared more than 525 five-star reviews on platforms
            such as Zillow and Google.
          </p>

          <p>
            These numbers matter, but what matters most is how our clients feel
            at the end of the process: informed, supported, and satisfied with
            the outcome.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <h3>Proudly affiliated with Keller Williams Fox Cities</h3>

          <p>
            We operate as The Lathrop Team, with our own branding and identity,
            while being affiliated with Keller Williams Fox Cities in Appleton.
            This gives our clients the advantage of a boutique team backed by
            one of the largest brokerages in the world.
          </p>

          <p>
            Keller Williams Fox Cities
            <br />
            517 N. Westhill Blvd, Appleton, WI
            <br />
            Each office is independently owned and operated.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}