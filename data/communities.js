import communityImages from './communityImages';

const statLabels = [
  'Median sale price',
  'Average days on market',
  'Active listings',
  'Average price per sq. ft.',
  'Year-over-year trend',
];

function createPlaceholderStats() {
  return statLabels.map((label) => ({
    label,
    value: 'Coming soon',
    period: 'Reporting period to be confirmed',
    source: null,
  }));
}

const communityGalleryPrefixes = {
  Appleton: 'appleton',
  Neenah: 'neenah',
  Menasha: 'menasha',
  Kaukauna: 'kaukauna',
  Kimberly: 'kimberly',
  'Little Chute': 'littlechute',
  Greenville: 'greenville',
  Oshkosh: 'oshkosh',
};

function createCommunityGallery(name) {
  const prefix = communityGalleryPrefixes[name];

  if (!prefix) {
    throw new Error(`Missing gallery image prefix for "${name}".`);
  }

  return [1, 2, 3].map((number) => ({
    src: `/communities/${prefix}${number}.jpg`,
    alt: `${name} gallery photograph ${number}`,
    label: `${name} gallery photograph ${String(number).padStart(2, '0')}`,
    isPlaceholder: false,
    objectPosition: 'center',
  }));
}

function createCommunityDetails(name) {
  return {
    heroImage: communityImages[name],
    stats: createPlaceholderStats(),
    propertyGallery: createCommunityGallery(name),
    finalCta: {
      title: `Let’s talk about your next move in ${name}.`,
      copy:
        'Buying, selling, or simply exploring? Talk with the Lathrop Team about your priorities and next steps.',
      href: '/contact',
      label: 'Talk through your move',
    },
  };
}

const communities = [
  {
    id: 'appleton',
    slug: 'appleton',
    index: '01',
    name: 'Appleton',
    descriptor: 'The center of the Fox Cities',
    initial: 'A',
    blurb:
      'A dynamic mix of established neighborhoods and newer developments, with a strong downtown core and easy access to shopping, dining, and schools.',
    intro:
      'Explore a Fox Cities community with a wide range of neighborhoods, everyday conveniences, and a strong sense of local connection.',
    overview:
      'Appleton offers a variety of ways to feel at home—from established residential streets and walkable areas to newer opportunities close to the places people use every day. The right fit comes down to your priorities, timing, and the kind of daily rhythm you want.',
    ...createCommunityDetails('Appleton'),
  },
  {
    id: 'neenah',
    slug: 'neenah',
    index: '02',
    name: 'Neenah',
    descriptor: 'Waterfront character',
    initial: 'N',
    blurb:
      'Waterfront charm and established neighborhoods, with convenient access to commuting routes and local amenities.',
    intro:
      'Find your place in a community where neighborhood character, local gathering places, and access to the Fox Cities come together.',
    overview:
      'Neenah gives buyers and sellers a range of housing settings to consider, with distinct areas that can feel different from one block to the next. We help you look beyond the listing and understand how location, condition, and lifestyle fit into your decision.',
    ...createCommunityDetails('Neenah'),
  },
  {
    id: 'menasha',
    slug: 'menasha',
    index: '03',
    name: 'Menasha',
    descriptor: 'A balanced pace',
    initial: 'M',
    blurb:
      'Historic homes, quiet streets, and proximity to both Appleton and Neenah, offering a balanced pace of life.',
    intro:
      'Discover a connected Fox Cities community with its own character, practical location, and range of home options.',
    overview:
      'Menasha offers a mix of residential settings for people seeking access to the broader Fox Cities while staying connected to a community with a personality of its own. We help clients compare homes in context, from the surrounding streets to the tradeoffs that matter most.',
    ...createCommunityDetails('Menasha'),
  },
  {
    id: 'kaukauna',
    slug: 'kaukauna',
    index: '04',
    name: 'Kaukauna',
    descriptor: 'Growing with character',
    initial: 'K',
    blurb:
      'Growing neighborhoods with a small-town feel and easy access to the Fox River and regional employers.',
    intro:
      'Consider a community shaped by local roots, day-to-day convenience, and a range of possibilities for your next move.',
    overview:
      'Kaukauna can offer different housing styles, locations, and decision points depending on where you are in the buying or selling process. Our role is to bring local perspective to the details—from home condition and pricing to how an area supports the life you want to build.',
    ...createCommunityDetails('Kaukauna'),
  },
  {
    id: 'kimberly',
    slug: 'kimberly',
    index: '05',
    name: 'Kimberly',
    descriptor: 'A close-knit community',
    initial: 'K',
    blurb:
      'Tight-knit community with well-regarded schools and convenient access to Appleton.',
    intro:
      'Explore a community where local familiarity, residential options, and Fox Cities access support a thoughtful next step.',
    overview:
      'Kimberly is a place where small-area details can shape a real estate decision. We help you evaluate homes with a fuller view of location, nearby amenities, property condition, and the market context around each opportunity.',
    ...createCommunityDetails('Kimberly'),
  },
  {
    id: 'little-chute',
    slug: 'little-chute',
    index: '06',
    name: 'Little Chute',
    descriptor: 'Quietly connected',
    initial: 'L',
    blurb:
      'Affordable neighborhoods with a quiet atmosphere and quick access to nearby cities.',
    intro:
      'Find a home in a community known for its local identity, connected setting, and variety of residential opportunities.',
    overview:
      'Little Chute offers buyers and sellers a distinct local setting within the Fox Cities. Whether you are evaluating your first move, preparing a sale, or narrowing your search, we help you see the practical context behind each address.',
    ...createCommunityDetails('Little Chute'),
  },
  {
    id: 'greenville',
    slug: 'greenville',
    index: '07',
    name: 'Greenville',
    descriptor: 'Room to grow',
    initial: 'G',
    blurb:
      'Newer developments, larger lots, and a blend of rural feel with modern conveniences.',
    intro:
      'Explore a community where space, neighborhood setting, and access to the Fox Cities can shape a different kind of home search.',
    overview:
      'Greenville offers a range of home and property considerations that benefit from local guidance. We help clients compare location, lot, layout, condition, and timing so the next step is based on more than surface-level details.',
    ...createCommunityDetails('Greenville'),
  },
  {
    id: 'oshkosh',
    slug: 'oshkosh',
    index: '08',
    name: 'Oshkosh',
    descriptor: 'Lakefront energy',
    initial: 'O',
    blurb:
      'Lakefront access, university-town energy, and a mix of historic and newer housing options.',
    intro:
      'Discover a community with a broad range of neighborhoods, housing possibilities, and a lifestyle that deserves close local attention.',
    overview:
      'Oshkosh gives buyers and sellers many variables to weigh across different areas and property types. We help simplify the process by bringing clarity to market position, home condition, neighborhood context, and the choices in front of you.',
    ...createCommunityDetails('Oshkosh'),
  },
];

export function getCommunityBySlug(slug) {
  return communities.find((community) => community.slug === slug);
}

export default communities;