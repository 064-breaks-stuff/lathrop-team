import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div className="footer-brand">
          <div className="site-logo">
            <Image
              src="/logos/lathrop-logo-icon.jpg"
              alt="Lathrop Team logo icon"
              width={30}
              height={30}
            />
            <span className="site-logo-text">LATHROP TEAM</span>
          </div>
          <p>
            Three-generation Fox Cities real estate team with a RealTrends
            verified record and 525+ five-star reviews.
          </p>
        </div>
        <div>
          <strong>Contact</strong>
          <p>Diane Lathrop · (920) 428-9227 · diane@lathropteam.com</p>
          <p>Shane Lathrop · (920) 428-0066 · shane@lathropteam.com</p>
          <p>Oliver Lathrop · (920) 858-4424 · oliver@lathropteam.com</p>
        </div>
        <div className="footer-kw">
          <strong>Keller Williams Fox Cities</strong>
          <p>517 N. Westhill Blvd, Appleton, WI</p>
          <p>Each office is independently owned and operated.</p>
        </div>
      </div>
    </footer>
  );
}