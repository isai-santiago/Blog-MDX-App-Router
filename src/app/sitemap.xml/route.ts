import { getAllPosts } from '../../../lib/posts';

export async function GET() {
    const posts = await getAllPosts();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${baseUrl}</loc>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>${baseUrl}/blog</loc>
            <changefreq>daily</changefreq>
            <priority>0.9</priority>
        </url>
        ${posts.map(post => `
        <url>
            <loc>${baseUrl}/blog/${post.slug}</loc>
            <lastmod>${new Date(post.date).toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>
        `).join('')}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'text/xml',
            'Cache-Control': 's-maxage=86400, stale-while-revalidate'
        },
    });
}