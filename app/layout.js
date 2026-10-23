import '../styles/tokens.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/components.css';
import '../styles/home.css';
import '../styles/pages.css';
import '../styles/forms.css';

import SiteShell from '../components/layout/SiteShell';
import MetaPixelEvents from '../components/analytics/MetaPixelEvents';

export const metadata = {
  metadataBase: new URL(
    'https://lathrop-team.united-states.workers.dev'
  ),
  title: {
    default: 'Lathrop Team | Fox Cities Real Estate',
    template: '%s | Lathrop Team',
  },
  description:
    'Three-generation Fox Cities real estate team with a RealTrends Verified record and 525+ five-star reviews.',
};

const metaPixelBaseCode = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '343342906237570');
fbq('track', 'PageView');
window.__lathropMetaLastPageView = window.location.pathname;
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          id="meta-pixel-base"
          dangerouslySetInnerHTML={{ __html: metaPixelBaseCode }}
        />
      </head>

      <body>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=343342906237570&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <MetaPixelEvents />

        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}