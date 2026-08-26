import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Link from 'next/link';

export const metadata = {
  title: 'Sell Your Home | Lathrop Team',
  description:
    'Sell your Fox Cities home with a three-generation team and a RealTrends verified record.',
};

export default function SellPage() {
  return (
    <section className="page page-sell">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Sell with confidence"
          title="Sell your Fox Cities home with a proven team"
        />
      </ScrollReveal>

      <div className="page-body">
        <ScrollReveal delay={200}>
          <p>
            In 2024, our RealTrends verified performance recorded $27.24M in
            closed volume across 76 transaction sides. We use that experience to
            price, market, and negotiate your sale with confidence.
          </p>

          <h3>A clear, four-step plan</h3>

          <ol className="sell-steps">
            <li>
              <strong>Accurate valuation.</strong> We analyze recent sales,
              local trends, and your home’s unique features—not just a generic
              online estimate.
            </li>
            <li>
              <strong>Preparation and presentation.</strong> Guidance on repair
              priorities, staging, and professional photography.
            </li>
            <li>
              <strong>Strategic marketing.</strong> Listing syndication,
              targeted digital exposure, and communication with our network.
            </li>
            <li>
              <strong>Negotiation and closing.</strong> We handle offers,
              counters, inspection responses, and closing details.
            </li>
          </ol>

          <p>
            Our team’s performance has been verified by RealTrends, an
            independent industry source that tracks production nationwide.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="page-cta">
            <p>Start with a free home valuation.</p>
            <Link href="/home-valuation">
              <Button>Get my home value</Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}