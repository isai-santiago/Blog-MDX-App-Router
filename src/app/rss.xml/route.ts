import { getAllPosts, generateRSSFeed } from '../../../lib/posts';

export async function GET() {
    const posts = await getAllPosts();
    const rss = generateRSSFeed(posts);

    return new Response(rss, {
        headers: {
            'Content-Type': 'text/xml',
            'Cache-Control': 's-maxage=86400, stale-while-revalidate'
        },
    });
}