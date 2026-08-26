import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Link from 'next/link';

export const metadata = {
  title: 'Buy in the Fox Cities | Lathrop Team',
  description:
    'Buy in the Fox Cities with a three-generation team that knows the streets, schools, and neighborhoods.',
};

export default function BuyPage() {
  return (
    <section className="page page-buy">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Buy with Lathrop Team"
          title="Buy in the Fox Cities with local guides"
        />
      </ScrollReveal>

      <div className="page-body">
        <ScrollReveal delay={200}>
          <p>
            We’ve lived and worked in the Fox Cities for decades. We know the
            streets, the schools, the commutes, and the hidden gems that don’t
            show up in search filters.
          </p>

          <h3>A team, not just an agent</h3>

          <ul className="page-list">
            <li>
              <strong>Local insight.</strong> Three generations of experience
              in Appleton and surrounding communities means we can explain why
              one block may feel different from the next.
            </li>
            <li>
              <strong>Data-backed advice.</strong> We use current sales data and
              market trends to advise you on pricing, offer strength, and timing.
            </li>
            <li>
              <strong>Full support.</strong> From pre-approval conversations
              through closing, we coordinate with your lender, inspector, and
              title company so you’re not chasing updates.
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="page-card">
            <h3>The Fox Cities Buyer’s Guide</h3>
            <p>
              We’re putting together a concise guide to buying in the Fox
              Cities—covering neighborhoods, timelines, and what to expect at
              each step. Share your email and we’ll send it as soon as it’s
              ready.
            </p>
            <Button>Reserve my copy</Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="page-cta">
            <p>Ready to start seeing homes?</p>
            <Link href="/contact">
              <Button>Schedule a consultation</Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}