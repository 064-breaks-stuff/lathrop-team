'use client';

import Script from 'next/script';
import './guides-lead-magnet.css';

export default function GuidesLeadMagnet() {
  return (
    <section
      id="buyers-sellers-guides"
      className="guides-lead-magnet"
      aria-labelledby="guides-lead-magnet-title"
    >
      <div className="guides-lead-magnet-content">
        <p className="guides-lead-magnet-eyebrow">
          Plan your next chapter
        </p>

        <h2 id="guides-lead-magnet-title">
          Get the Buyer’s &amp; Seller’s Guides
        </h2>

        <p className="guides-lead-magnet-description">
          Submit the form and we’ll send you practical guides to help you
          make your next move with confidence.
        </p>

        <p className="guides-lead-magnet-delivery">
          After submitting, you’ll see a thank-you message here and receive
          the guides by email.
        </p>
      </div>

      <div className="guides-lead-magnet-form">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/c4gouupwAcYwlKn3nYNS"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '8px',
          }}
          id="inline-c4gouupwAcYwlKn3nYNS"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Buyer's and Seller's Guide"
          data-height="989"
          data-layout-iframe-id="inline-c4gouupwAcYwlKn3nYNS"
          data-form-id="c4gouupwAcYwlKn3nYNS"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="Buyer's and Seller's Guide"
        />
      </div>

      <Script
        id="ghl-guide-form-embed"
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </section>
  );
}