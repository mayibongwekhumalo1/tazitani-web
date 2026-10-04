export type NewsItem = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  body: string[];
};

export const newsItems: NewsItem[] = [
  {
    slug: 'creating-room-for-every-learner',
    category: 'Education',
    date: 'Coming soon',
    title: 'Creating room for every learner to grow',
    excerpt: 'An update on our education support initiatives and the communities we are working with to expand access to quality learning.',
    image: 'school',
    featured: true,
    body: [
      'Education is one of the surest ways to open doors in rural communities. Tazitani is building programmes that support schools, literacy, and practical skills so that children and young people can grow with confidence.',
      'This article is a placeholder. Full reporting will be published here as our education work is implemented, documented, and shared with the consent of the communities involved.',
      'If you would like to support learning in Matabeleland North, you can donate, volunteer, or get in touch about a school partnership.',
    ],
  },
  {
    slug: 'growing-opportunity-from-the-ground-up',
    category: 'Agriculture',
    date: 'Coming soon',
    title: 'Growing opportunity from the ground up',
    excerpt: 'How sustainable agriculture programmes are helping families build reliable livelihoods.',
    image: 'farm',
    body: [
      'Sustainable livelihoods begin with the land. Our agriculture and enterprise work is designed to help families grow food, generate income, and build resilience over time.',
      'This is a placeholder update. Field stories, photos, and outcomes will be added as programmes are delivered and verified.',
      'Partners, volunteers, and donors who care about farming and small enterprise are warmly invited to join this work.',
    ],
  },
  {
    slug: 'listening-first-building-together',
    category: 'Community',
    date: 'Coming soon',
    title: 'Listening first, building together',
    excerpt: 'A reflection on our community engagement approach and what we have learned so far.',
    image: 'meeting',
    body: [
      'We do not arrive with ready-made answers. Tazitani starts by listening to local leaders, churches, and families, then building practical solutions together.',
      'This reflection will be expanded with real community voices as they are gathered with dignity and permission.',
    ],
  },
  {
    slug: 'working-together-for-lasting-impact',
    category: 'Partnerships',
    date: 'Coming soon',
    title: 'Working together for lasting impact',
    excerpt: 'Updates on our partnerships and collaborations with local organisations and churches.',
    image: 'group',
    body: [
      'Lasting change is shared work. We collaborate with churches, community groups, and organisations who share a commitment to faith, opportunity, and sustainability.',
      'Partnership announcements will appear here as relationships are confirmed. Until then, organisations who would like to collaborate can reach us through the contact page.',
    ],
  },
  {
    slug: 'caring-for-creation-in-matabeleland-north',
    category: 'Environment',
    date: 'Coming soon',
    title: 'Caring for creation in Matabeleland North',
    excerpt: 'Our environmental stewardship initiatives and the difference they are making.',
    image: 'volunteers',
    body: [
      'Caring for creation is both a faith responsibility and a practical necessity. Tree planting, conservation awareness, and sustainable land use sit at the heart of this work.',
      'Impact notes from environmental programmes will be published here as activities are carried out and results can be shared honestly.',
    ],
  },
  {
    slug: 'opening-doors-for-the-next-generation',
    category: 'Youth',
    date: 'Coming soon',
    title: 'Opening doors for the next generation',
    excerpt: 'Stories from our youth empowerment programmes and the young leaders emerging.',
    image: 'class',
    body: [
      'Young people carry the future of Matabeleland North. Our youth programmes focus on skills, leadership, and opportunity so the next generation can lead with integrity.',
      'Verified youth stories will replace this placeholder as programmes grow and participants choose to share their experiences.',
    ],
  },
];

export function getNewsBySlug(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}
