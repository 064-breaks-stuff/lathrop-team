import Link from 'next/link';
import Image from 'next/image';

const navigationLinks = [
  { href: '/buy', label: 'Buy' },
  { href: '/sell', label: 'Sell' },
  { href: '/home-valuation', label: 'Home Valuation' },
  { href: '/communities', label: 'Communities' },
  { href: '/team', label: 'Team' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="footer-brand">
          <Link href="/" className="site-logo" aria-label="Lathrop Team Home">
            <Image
              src="/logos/1.jpg"
              alt="Lathrop Team logo"
              width={42}
              height={42}
            />
            <span className="site-logo-text">Lathrop Team</span>
          </Link>

          <p>
            A three-generation Fox Cities real estate team bringing local
            perspective, documented performance, and personal guidance to every
            move.
          </p>

          <Link href="/contact" className="footer-text-link">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="footer-navigation">
          <p className="footer-heading">Explore</p>

          <div className="footer-nav-links">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-contact">
          <p className="footer-heading">Direct contact</p>

          <address>
            <p>
              <strong>Diane Lathrop</strong>
              <a href="mailto:diane@lathropteam.com">diane@lathropteam.com</a>
              <a href="tel:+19204289227">(920) 428-9227</a>
            </p>

            <p>
              <strong>Shane Lathrop</strong>
              <a href="mailto:shane@lathropteam.com">shane@lathropteam.com</a>
              <a href="tel:+19204280066">(920) 428-0066</a>
            </p>

            <p>
              <strong>Oliver Lathrop</strong>
              <a href="mailto:oliver@lathropteam.com">oliver@lathropteam.com</a>
              <a href="tel:+19208584424">(920) 858-4424</a>
            </p>
          </address>
        </div>

        <div className="footer-map">
          <div className="footer-map-header">
            <p className="footer-heading">Office location</p>
            <span>Kimberly, Wisconsin</span>
          </div>

          <div className="footer-map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.399714035176!2d-88.3487519239637!3d44.260595671079685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8803b046dc6c3455%3A0x3226fe789bf82f69!2s711%20Eisenhower%20Dr%2C%20Kimberly%2C%20WI%2054136%2C%20USA!5e0!3m2!1sen!2sin!4v1792264453708!5m2!1sen!2sin"
              title="Lathrop Team office at 711 Eisenhower Drive, Kimberly, WI 54136"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>

      <div className="site-footer-compliance">
        <div className="footer-kw">
          <div className="footer-kw-heading">
            <p>Keller Williams Fox Cities</p>

            <Image
              /*
                Replace with the exact approved KW logo file path.
                Example: /logos/kw-logo.jpg
              */
              src="/PLACEHOLDER-KW-LOGO.jpg"
              alt="Keller Williams Fox Cities"
              width={132}
              height={48}
              className="footer-kw-logo"
            />
          </div>

          <address>
            Lathrop Team
            <br />
            711 Eisenhower Drive, Kimberly, WI 54136
            <br />
            Each office is independently owned and operated.
          </address>
        </div>

        <div className="footer-compliance-marks">
          <div className="footer-compliance-mark">
            <Image
              /*
                Replace with the approved Equal Housing mark file path.
                Example: /logos/equal-housing.jpg
              */
              src="/PLACEHOLDER-EQUAL-HOUSING.jpg"
              alt="Equal Housing Opportunity"
              width={42}
              height={42}
            />
            <span>Equal Housing Opportunity</span>
          </div>

          <div className="footer-compliance-mark">
            <Image
              /*
                Replace with the approved REALTOR® mark file path.
                Example: /logos/realtor-mark.jpg
              */
              src="/PLACEHOLDER-REALTOR-MARK.jpg"
              alt="REALTOR®"
              width={42}
              height={42}
            />
            <span>REALTOR®</span>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© {new Date().getFullYear()} Lathrop Team. All rights reserved.</p>

        <div>
          <span>Fox Cities, Wisconsin</span>
          <span>RealTrends Verified · 525+ five-star reviews</span>
        </div>
      </div>
    </footer>
  );
}