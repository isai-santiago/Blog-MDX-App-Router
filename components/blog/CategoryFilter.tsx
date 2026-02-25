// components/blog/CategoryFilter.tsx
import Link from 'next/link';
import { BlogCategory } from '../../types/blog';

interface Props {
    categories: BlogCategory[];
    activeCategory?: string;
}

export function CategoryFilter({ categories, activeCategory }: Props) {
    return (
        <div className="flex flex-wrap gap-3 my-8 justify-center">
            <Link 
                href="/blog"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!activeCategory ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'}`}
            >
                Todos
            </Link>
            {categories.map((cat) => (
                <Link
                    key={cat.slug}
                    href={`/blog?category=${cat.slug}`}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.slug ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'}`}
                >
                    {cat.name} <span className="ml-1 opacity-60">({cat.count})</span>
                </Link>
            ))}
        </div>
    );
}