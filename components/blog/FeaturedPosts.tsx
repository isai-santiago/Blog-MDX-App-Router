// components/blog/FeaturedPosts.tsx
import { Post } from '../../types/blog';
import { PostCard } from './PostCard';

export function FeaturedPosts({ posts }: { posts: Post[] }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
            ))}
        </div>
    );
}