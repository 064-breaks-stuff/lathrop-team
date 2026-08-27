import '../styles/tokens.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/components.css';
import '../styles/home.css';
import '../styles/pages.css';
import '../styles/forms.css';

import SiteShell from '../components/layout/SiteShell';

export const metadata = {
  title: {
    default: 'Lathrop Team | Fox Cities Real Estate',
    template: '%s | Lathrop Team',
  },
  description:
    'Three-generation Fox Cities real estate team with a RealTrends Verified record and 525+ five-star reviews.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}