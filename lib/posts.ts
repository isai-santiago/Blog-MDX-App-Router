// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, BlogCategory } from '../types/blog';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export async function getAllPosts(): Promise<Post[]> {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = await Promise.all(
        fileNames
            .filter((fileName) => fileName.endsWith('.mdx'))
            .map(async (fileName) => {
                const slug = fileName.replace(/\.mdx$/, '');
                return getPostBySlug(slug);
            })
    );

    return allPostsData
        .filter((post): post is Post => post !== null)
        .filter(post => post.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    // 🛡️ ESCUDO: Si el slug viene vacío o es 'undefined', abortamos sin error
    if (!slug || slug === 'undefined') return null; 

    try {
        const fullPath = path.join(postsDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Calculate reading time (average 200 words per minute)
        const wordCount = content.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);

        return {
            slug,
            title: data.title,
            description: data.description,
            date: data.date,
            category: data.category,
            tags: data.tags || [],
            author: data.author || {
                name: 'Indaptados Team',
                avatar: '/avatars/team.jpg',
                bio: 'Equipo técnico de Indaptados'
            },
            readingTime,
            featured: data.featured || false,
            published: data.published !== false,
            content,
            coverImage: data.coverImage,
            seo: data.seo
        };
    } catch (error) {
        console.error(`Error loading post ${slug}:`, error);
        return null;
    }
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
    const allPosts = await getAllPosts();
    return allPosts.filter(post =>
        post.category.toLowerCase() === category.toLowerCase()
    );
}

export async function getFeaturedPosts(limit: number = 3): Promise<Post[]> {
    const allPosts = await getAllPosts();
    return allPosts.filter(post => post.featured).slice(0, limit);
}

export async function getRelatedPosts(currentPost: Post, limit: number = 3): Promise<Post[]> {
    const allPosts = await getAllPosts();

    // Score posts by relevance
    const scoredPosts = allPosts
        .filter(post => post.slug !== currentPost.slug)
        .map(post => {
            let score = 0;

            // Same category = +3 points
            if (post.category === currentPost.category) score += 3;

            // Shared tags = +1 point per tag
            const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
            score += sharedTags.length;

            return { post, score };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);

    return scoredPosts.map(({ post }) => post);
}

export async function getCategories(): Promise<BlogCategory[]> {
    const allPosts = await getAllPosts();
    const categoryMap = new Map<string, { count: number; posts: Post[] }>();

    allPosts.forEach(post => {
        const category = post.category;
        if (!categoryMap.has(category)) {
            categoryMap.set(category, { count: 0, posts: [] });
        }
        const categoryData = categoryMap.get(category)!;
        categoryData.count++;
        categoryData.posts.push(post);
    });

    const categories = [
        { name: 'React', slug: 'react', description: 'React y ecosystem', color: 'blue' },
        { name: 'Next.js', slug: 'nextjs', description: 'Framework full-stack', color: 'gray' },
        { name: 'TypeScript', slug: 'typescript', description: 'JavaScript tipado', color: 'blue' },
        { name: 'Node.js', slug: 'nodejs', description: 'Backend development', color: 'green' },
        { name: 'DevOps', slug: 'devops', description: 'Deployment y CI/CD', color: 'purple' },
        { name: 'UI/UX', slug: 'ui-ux', description: 'Design y usabilidad', color: 'pink' }
    ];

    return categories.map(category => ({
        ...category,
        count: categoryMap.get(category.slug)?.count || 0
    }));
}

export function generateRSSFeed(posts: Post[]): string {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    const rssItems = posts.map(post => `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <description><![CDATA[${post.description}]]></description>
            <link>${baseUrl}/blog/${post.slug}</link>
            <guid>${baseUrl}/blog/${post.slug}</guid>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <category>${post.category}</category>
            <author>${post.author.name}</author>
        </item>
    `).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
        <rss version="2.0">
            <channel>
                <title>Indaptados Blog</title>
                <description>Blog técnico sobre desarrollo web moderno</description>
                <link>${baseUrl}</link>
                <language>es</language>
                <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
                ${rssItems}
            </channel>
        </rss>`;
}