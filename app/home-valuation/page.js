import SectionHeading from '../../components/ui/SectionHeading';
import ValuationForm from '../../components/forms/ValuationForm';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const metadata = {
  title: 'Home Valuation | Lathrop Team',
  description:
    'Get a realistic valuation for your Fox Cities home from a three-generation team.',
};

export default function HomeValuationPage() {
  return (
    <section className="page page-valuation">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Home valuation"
          title="What is your Fox Cities home really worth?"
        />
      </ScrollReveal>

      <div className="page-body">
        <ScrollReveal delay={200}>
          <p>
            Online estimates are generic. Our valuations are built on 35+ years
            of local experience and independently verified production data.
          </p>

          <h3>Why our valuation is different</h3>

          <ul className="page-list">
            <li>
              We consider neighborhood-level trends in Appleton and the
              surrounding communities.
            </li>
            <li>
              We factor in updates, condition, and unique features—not just
              square footage.
            </li>
            <li>
              We cross-check against recent sales we’ve personally handled, plus
              local MLS data.
            </li>
          </ul>

          <p>
            The result is a realistic pricing strategy, not just a number. Share
            a bit about your property and we’ll follow up with a personalized
            valuation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300} className="page-form-wrapper">
          <ValuationForm />
        </ScrollReveal>
      </div>
    </section>
  );
}