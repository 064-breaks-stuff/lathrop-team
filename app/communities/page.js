import SectionHeading from '../../components/ui/SectionHeading';
import CommunityGrid from '../../components/communities/CommunityGrid';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const metadata = {
  title: 'Fox Cities Communities | Lathrop Team',
  description:
    'Explore the Fox Cities communities served by the Lathrop Team.',
};

export default function CommunitiesPage() {
  return (
    <section className="page page-communities">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Fox Cities"
          title="Neighborhoods at a glance"
        />
      </ScrollReveal>

      <div className="page-body">
        <ScrollReveal delay={200}>
          <p>
            From Appleton and Neenah to Menasha, Kaukauna, Kimberly, Little
            Chute, Greenville, and Oshkosh, the Fox Cities offer a range of
            options—quiet streets, walkable cores, and everything in between.
          </p>

          <p>
            We’ll talk through schools, commute times, resale history, and local
            amenities so you can choose with confidence.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <CommunityGrid />
        </ScrollReveal>
      </div>
    </section>
  );
}