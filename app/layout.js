import '../styles/tokens.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/components.css';
import '../styles/home.css';
import '../styles/pages.css';
import '../styles/forms.css';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';

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
        <PageTransition />

        <div className="site">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}