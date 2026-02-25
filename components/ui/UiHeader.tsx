// components/ui/Header.tsx
import Link from 'next/link';
import { BlogCategory } from '../../types/blog';

export function Header({ categories }: { categories?: BlogCategory[] }) {
    return (
        <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                    Indaptados
                </Link>
                <nav className="hidden md:flex gap-6">
                    <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                        Blog
                    </Link>
                    {/* Aquí podrías iterar categories si quieres links directos en el nav */}
                </nav>
            </div>
        </header>
    );
}