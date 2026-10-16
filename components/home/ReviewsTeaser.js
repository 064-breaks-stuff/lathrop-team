import Link from 'next/link';
import reviews from '../../data/reviews';
import './home-reviews.css';

export default function ReviewsTeaser() {
  return (
    <section
      id="reviews"
      className="home-client-reviews"
      aria-labelledby="home-client-reviews-title"
    >
      <div className="home-client-reviews-heading">
        <div>
          <p className="home-client-reviews-eyebrow">
            Client perspective
          </p>

          <h2 id="home-client-reviews-title">
            Trust is built
            <em>one move at a time.</em>
          </h2>
        </div>

        <div className="home-client-reviews-intro">
          <p className="home-client-reviews-count">
            525+
            <span>five-star reviews</span>
          </p>

          <p className="home-client-reviews-summary">
            Results matter, but so does the experience of getting there.
            Our goal is for you to feel informed, supported, and confident
            in the decisions ahead.
          </p>
        </div>
      </div>

      <div className="home-client-reviews-grid">
        {reviews.map((review) => (
          <figure
            className="home-client-review-card"
            key={review.id}
          >
            <span
              className="home-client-review-mark"
              aria-hidden="true"
            >
              “
            </span>

            <blockquote className="home-client-review-quote">
              <p>{review.quote}</p>
            </blockquote>

            <figcaption className="home-client-review-author">
              {review.name}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="home-client-reviews-actions">
        <p>
          Whether you are buying, selling, or thinking ahead, we are here
          to answer questions and help you create a clear plan.
        </p>

        <Link href="/contact" className="btn">
          Start a conversation
        </Link>
      </div>
    </section>
  );
}