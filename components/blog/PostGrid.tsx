// components/blog/PostGrid.tsx
import { Post } from '../../types/blog';
import { PostCard } from './PostCard';

export function PostGrid({ posts }: { posts: Post[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
            ))}
        </div>
    );
}