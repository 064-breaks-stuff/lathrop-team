import SectionHeading from '../../components/ui/SectionHeading';
import TeamGrid from '../../components/team/TeamGrid';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const metadata = {
  title: 'Meet the Team | Lathrop Team',
  description:
    'Meet Diane, Shane, and Oliver Lathrop — a three-generation Fox Cities real estate team.',
};

export default function TeamPage() {
  return (
    <section className="page page-team">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Meet the team"
          title="A family helping families"
        />
      </ScrollReveal>

      <div className="page-body">
        <ScrollReveal delay={200}>
          <p>
            Diane, Shane, and Oliver Lathrop represent three generations in real
            estate. That depth shows up in how we price, how we negotiate, and
            how we support you through the process.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <TeamGrid />
        </ScrollReveal>
      </div>
    </section>
  );
}