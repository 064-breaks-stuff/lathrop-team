'use client';

import Script from 'next/script';

export default function ContactForm() {
  return (
    <>
      <div
        className="contact-ghl-form"
        style={{
          width: '100%',
          minWidth: 0,
          backgroundColor: '#fff',
          borderRadius: '3px',
        }}
      >
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/eVD6DqL3tZXg0bRl3KHQ"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '100%',
            height: '1080px',
            border: 'none',
            borderRadius: '3px',
          }}
          id="inline-eVD6DqL3tZXg0bRl3KHQ"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Contact Submission Form"
          data-height="1080"
          data-layout-iframe-id="inline-eVD6DqL3tZXg0bRl3KHQ"
          data-form-id="eVD6DqL3tZXg0bRl3KHQ"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="Contact Submission Form"
        />
      </div>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}