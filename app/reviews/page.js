import SectionHeading from '../../components/ui/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const metadata = {
  title: 'Reviews | Lathrop Team',
  description:
    'Read what buyers and sellers have said about working with the Lathrop Team.',
};

export default function ReviewsPage() {
  return (
    <section className="page page-reviews">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Client feedback"
          title="525+ five-star reviews"
        />
      </ScrollReveal>

      <div className="page-body">
        <ScrollReveal delay={200}>
          <p>
            Over the years, clients have shared more than 525 five-star reviews
            on platforms including Zillow and Google. They talk about our
            responsiveness, market knowledge, and how we make complex
            transactions feel manageable.
          </p>

          <p>
            We’ll be highlighting a selection of those reviews here. For now,
            this space is reserved as a dedicated hub for the stories our
            clients have shared.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="reviews-placeholder">
            <p>
              Review carousel and featured quotes will be added here using
              actual client feedback from Zillow, Google, and other platforms.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}