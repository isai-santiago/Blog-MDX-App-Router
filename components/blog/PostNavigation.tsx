// components/blog/PostNavigation.tsx
import { Post } from '../../types/blog';
import ThemeProvider from 'components/ui/ThemeProvider';

export function PostNavigation({ post }: { post: Post }) {
    return (
        <div className="mt-10 py-6 flex items-center gap-2 flex-wrap border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            
            <span className="text-white-900 dark:text-dark font-bold">
                Etiquetas:
            </span>
            
            {post.tags.map(tag => (
                <span 
                    key={tag} 
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-colors duration-300"
                >
                    #{tag}
                </span>
            ))}
        </div>
    );
}