// lib/search.ts
import { Post, SearchResult } from '../types/blog';

export class BlogSearchEngine {
    private posts: Post[] = [];

    constructor(posts: Post[]) {
        this.posts = posts;
    }

    search(query: string): SearchResult[] {
        if (!query.trim()) return [];

        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);

        const results = this.posts.map(post => {
            let score = 0;
            const matches = {
                title: 0,
                description: 0,
                content: 0,
                tags: 0
            };

            searchTerms.forEach(term => {
                // Title matches (highest weight)
                if (post.title.toLowerCase().includes(term)) {
                    matches.title++;
                    score += 10;
                }

                // Description matches
                if (post.description.toLowerCase().includes(term)) {
                    matches.description++;
                    score += 5;
                }

                // Tag matches
                const tagMatches = post.tags.filter(tag =>
                    tag.toLowerCase().includes(term)
                ).length;
                matches.tags += tagMatches;
                score += tagMatches * 3;

                // Content matches (lowest weight but counts)
                const contentMatches = (post.content.toLowerCase().match(new RegExp(term, 'g')) || []).length;
                matches.content += contentMatches;
                score += contentMatches * 0.5;
            });

            return { post, score, matches };
        })
        .filter(result => result.score > 0)
        .sort((a, b) => b.score - a.score);

        return results;
    }

    searchByCategory(category: string): Post[] {
        return this.posts.filter(post =>
            post.category.toLowerCase() === category.toLowerCase()
        );
    }

    searchByTag(tag: string): Post[] {
        return this.posts.filter(post =>
            post.tags.some(postTag =>
                postTag.toLowerCase() === tag.toLowerCase()
            )
        );
    }

    getPopularTags(limit: number = 10): { tag: string; count: number }[] {
    const tagCount = new Map<string, number>(); // Usa < > directamente

    this.posts.forEach(post => {
        post.tags.forEach(tag => {
            tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
        });
    });

    return Array.from(tagCount.entries())
        .map(([tag, count]) => ({ tag, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, limit);
}
}
