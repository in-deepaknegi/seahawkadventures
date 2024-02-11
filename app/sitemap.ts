import { MetadataRoute } from 'next'
const urls = [
    'https://www.seahawkadventures.com',
    'https://www.seahawkadventures.com/about',
    'https://www.seahawkadventures.com/booking',
    'https://www.seahawkadventures.com/contacts',

    'https://www.seahawkadventures.com/explore',
    'https://www.seahawkadventures.com/explore/kayaking',
    'https://www.seahawkadventures.com/explore/rafting',

]

export default function sitemap(): MetadataRoute.Sitemap {
    console.log(urls.length);

    const allUrls: MetadataRoute.Sitemap = urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: url === 'https://www.seahawkadventures.com' ? 1 : 0.8,
    }));

    return allUrls;
}