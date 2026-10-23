import Link from 'next/link';
import './thank-you.css';

export const metadata = {
  title: 'Thank You',
  description: 'Thank you for contacting the Lathrop Team.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section
      className="thank-you-page"
      aria-labelledby="thank-you-title"
    >
      <div className="thank-you-page-frame" aria-hidden="true" />

      <div className="thank-you-page-content">
        <p className="thank-you-page-eyebrow">Lathrop Team</p>

        <h1 id="thank-you-title" className="thank-you-page-title">
          Thank you.
          <em>We’ve received your submission.</em>
        </h1>

        <p className="thank-you-page-description">
          Thank you for getting in touch with the Lathrop Team.
        </p>

        <Link href="/" className="btn btn--light thank-you-page-link">
          Return to the homepage
        </Link>
      </div>
    </section>
  );
}