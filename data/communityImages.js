function createCommunityImage({
  src,
  alt,
  title,
  author,
  commonsFilename,
  licenseVersion = '4.0',
}) {
  return {
    src,
    alt,
    label: title,
    isPlaceholder: false,
    attribution: {
      title,
      author,
      sourceUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(
        commonsFilename
      )}`,
      licenseName: `CC BY-SA ${licenseVersion}`,
      licenseUrl: `https://creativecommons.org/licenses/by-sa/${licenseVersion}/`,
      changes: 'Displayed cropped to fit the layout.',
    },
  };
}

const communityImages = {
  Appleton: createCommunityImage({
    src: '/communities/appleton.jpg',
    alt: 'East College Avenue in Appleton, Wisconsin.',
    title: 'Appleton June 2026 077 (E. College Avenue).jpg',
    author: 'Michael Barera',
    commonsFilename: 'Appleton June 2026 077 (E. College Avenue).jpg',
  }),

  Neenah: createCommunityImage({
    src: '/communities/neenah.jpg',
    alt:
      'Neenah Light marking the entrance to the Lower Fox River from Lake Winnebago in Neenah, Wisconsin.',
    title: 'NeenahLighthouse2009FoxRiver.jpg',
    author: 'Royalbroil',
    commonsFilename: 'NeenahLighthouse2009FoxRiver.jpg',
    licenseVersion: '3.0',
  }),

  Menasha: createCommunityImage({
    src: '/communities/menasha.jpg',
    alt:
      'Downtown Menasha, Wisconsin, looking north from the Mill Street Veranda.',
    title: 'Downtown Menasha.jpg',
    author: 'Arnmhs',
    commonsFilename: 'Downtown Menasha.jpg',
  }),

  Kaukauna: createCommunityImage({
    src: '/communities/kaukauna.jpg',
    alt: 'Veterans Memorial Bridge in Kaukauna, Wisconsin.',
    title: 'Veterans Memorial Bridge (Kaukauna, WI) March 2026.jpg',
    author: 'Cookie 505',
    commonsFilename:
      'Veterans Memorial Bridge (Kaukauna, WI) March 2026.jpg',
  }),

  Kimberly: createCommunityImage({
    src: '/communities/kimberly.jpg',
    alt: 'Kimberly High School in Wisconsin.',
    title: 'Kimberly High School.jpg',
    author: 'Wwahammy',
    commonsFilename: 'Kimberly High School.jpg',
  }),

  'Little Chute': createCommunityImage({
    src: '/communities/little%20chute.jpg',
    alt: 'Aerial view of the Little Chute windmill in Wisconsin.',
    title: 'Little Chute Windmill.jpg',
    author: 'Wtimmers',
    commonsFilename: 'Little Chute Windmill.jpg',
  }),

  Greenville: createCommunityImage({
    src: '/communities/greenville.jpg',
    alt:
      'Aerial view of Greenville, Wisconsin, looking southeast along Highway 15.',
    title: 'Aerial Greenville.jpg',
    author: 'Wtimmers',
    commonsFilename: 'Aerial Greenville.jpg',
  }),

  Oshkosh: createCommunityImage({
    src: '/communities/oshkosh.jpg',
    alt: 'Downtown Oshkosh, Wisconsin.',
    title: 'OKW.jpg',
    author: 'Awanalore',
    commonsFilename: 'OKW.jpg',
  }),
};

export default communityImages;