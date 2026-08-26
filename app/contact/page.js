import SectionHeading from '../../components/ui/SectionHeading';
import ContactForm from '../../components/forms/ContactForm';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const metadata = {
  title: 'Contact | Lathrop Team',
  description:
    'Contact the Lathrop Team to talk about buying or selling in the Fox Cities.',
};

export default function ContactPage() {
  return (
    <section className="page page-contact">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about your next move"
        />
      </ScrollReveal>

      <div className="page-body">
        <ScrollReveal delay={150}>
          <p>
            Whether you’re buying, selling, or just exploring options, we’re
            here to answer questions and lay out a clear path. Share a bit about
            what you’re planning and we’ll follow up promptly—usually within one
            business hour during the day.
          </p>
        </ScrollReveal>

        <div className="page-form-wrapper">
          <ContactForm />
        </div>

        <div className="contact-direct">
          <h3>Prefer to reach out directly?</h3>

          <p>
            Diane Lathrop —{' '}
            <a href="mailto:diane@lathropteam.com" className="link">
              diane@lathropteam.com
            </a>{' '}
            ·{' '}
            <a href="tel:+19204289227" className="link">
              (920) 428-9227
            </a>
          </p>

          <p>
            Shane Lathrop —{' '}
            <a href="mailto:shane@lathropteam.com" className="link">
              shane@lathropteam.com
            </a>{' '}
            ·{' '}
            <a href="tel:+19204280066" className="link">
              (920) 428-0066
            </a>
          </p>

          <p>
            Oliver Lathrop —{' '}
            <a href="mailto:oliver@lathropteam.com" className="link">
              oliver@lathropteam.com
            </a>{' '}
            ·{' '}
            <a href="tel:+19208584424" className="link">
              (920) 858-4424
            </a>
          </p>

          <p>
            Keller Williams Fox Cities
            <br />
            517 N. Westhill Blvd, Appleton, WI
            <br />
            Each office is independently owned and operated.
          </p>
        </div>
      </div>
    </section>
  );
}