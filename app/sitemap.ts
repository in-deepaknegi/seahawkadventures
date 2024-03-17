import { MetadataRoute } from "next";
import rafting from "@/data/rafting";
import kayak from "@/data/kayak";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const BASE_URL = 'https://www.seahawkadventures.com';

    const urls = [
        `${BASE_URL}/about`,
        `${BASE_URL}/contacts`,
        `${BASE_URL}/gallery`,
        `${BASE_URL}/login`,
        `${BASE_URL}/signup`,
    ]

    const entries_r: MetadataRoute.Sitemap = rafting.map(({ slug }) => ({
        url: `${BASE_URL}/rafting/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    const entries_k: MetadataRoute.Sitemap = kayak.map(({ slug }) => ({
        url: `${BASE_URL}/kayak/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    const allUrls: MetadataRoute.Sitemap = urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...allUrls,
        ...entries_r,
        ...entries_k,
    ]
}