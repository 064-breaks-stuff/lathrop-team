import communities from '../data/communities';

const SITE_URL = 'https://www.lathropteam.com';

export default function sitemap() {
  const mainPaths = [
    '/',
    '/buy',
    '/sell',
    '/home-valuation',
    '/communities',
    '/team',
    '/about',
    '/contact',
  ];

  const communityPaths = communities.map(
    (community) => `/communities/${community.slug}`
  );

  return [...mainPaths, ...communityPaths].map((path) => ({
    url: new URL(path, SITE_URL).href,
  }));
}