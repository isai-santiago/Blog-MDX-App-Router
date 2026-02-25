import { Post } from '../../types/blog';
import { PostCard } from '../blog/PostCard';

interface SearchResultsProps {
    results: Post[];
    query: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results, query }) => {
    if (results.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    No se encontraron resultados para "{query}"
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map(post => (
                <PostCard key={post.slug} post={post} />
            ))}
        </div>
    );
};