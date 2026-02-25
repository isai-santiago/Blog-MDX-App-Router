// components/blog/RelatedPosts.tsx
import { Post } from '../../types/blog';
import { PostCard } from './PostCard';

export function RelatedPosts({ posts }: { posts: Post[] }) {
    return (
        <div className="border-t border-gray-200 dark:border-gray-800 pt-10">
            <h3 className="text-white-900 dark:text-dark font-bold">Artículos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map(post => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
}

