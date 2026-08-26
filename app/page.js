import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import Intro from '../components/home/Intro';
import FeaturedListing from '../components/home/FeaturedListing';
import BuySellSplit from '../components/home/BuySellSplit';
import CommunitiesTeaser from '../components/home/CommunitiesTeaser';
import ReviewsTeaser from '../components/home/ReviewsTeaser';
import TeamTeaser from '../components/home/TeamTeaser';

export const metadata = {
  title: 'Lathrop Team | Fox Cities Real Estate',
  description:
    'A three-generation Fox Cities real estate team helping buyers and sellers move with confidence.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Intro />
      <FeaturedListing />
      <BuySellSplit />
      <CommunitiesTeaser />
      <ReviewsTeaser />
      <TeamTeaser />
    </>
  );
}