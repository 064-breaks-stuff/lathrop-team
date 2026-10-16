import { notFound } from 'next/navigation';
import communities, {
  getCommunityBySlug,
} from '../../../data/communities';
import CommunityDetailTemplate from '../../../components/communities/CommunityDetailTemplate';

export const dynamicParams = false;

export function generateStaticParams() {
  return communities.map((community) => ({
    slug: community.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    notFound();
  }

  const title = `${community.name} Real Estate & Community Guide | Lathrop Team`;

  const hasHeroImage =
    community.heroImage.src && !community.heroImage.isPlaceholder;

  return {
    title,
    description: community.intro,
    openGraph: {
      title,
      description: community.intro,
      type: 'website',
      ...(hasHeroImage
        ? {
            images: [
              {
                url: community.heroImage.src,
                alt: community.heroImage.alt,
              },
            ],
          }
        : {}),
    },
  };
}

export default async function CommunityPage({ params }) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    notFound();
  }

  return <CommunityDetailTemplate community={community} />;
}