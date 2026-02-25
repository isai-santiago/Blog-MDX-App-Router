import { getAllPosts, getFeaturedPosts, getCategories } from '../../../lib/posts';
import { PostGrid } from '../../../components/blog/PostGrid';
import { FeaturedPosts } from '../../../components/blog/FeaturedPosts';
import { CategoryFilter } from '../../../components/blog/CategoryFilter';
import { SearchBar } from '../../../components/search/SearchBar';

export const metadata = {
    title: 'Blog - Indaptados',
    description: 'Artículos técnicos sobre desarrollo web moderno, React, Next.js y más.',
};

export default async function BlogPage({
    searchParams
}: {
    searchParams: Promise<{ category?: string; page?: string }>
}) {
    const params = await searchParams;
    const currentCategory = params.category;
    const currentPage = params.page;

    const allPosts = await getAllPosts();
    const featuredPosts = await getFeaturedPosts();
    const categories = await getCategories();

    const filteredPosts = currentCategory
        ? allPosts.filter(post => post.category.toLowerCase() === currentCategory.toLowerCase())
        : allPosts;

    const page = parseInt(currentPage || '1');
    const postsPerPage = 9;
    const startIndex = (page - 1) * postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <div className="space-y-16 relative pb-16">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-cyan-500/5 dark:bg-cyan-500/10 blur-[100px] pointer-events-none -z-10"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10 transition-colors duration-300"></div>
 
            <section className="text-center pt-16 pb-12 px-4 border-b border-gray-200 dark:border-gray-800/50 relative">
                <div className="inline-block mb-4 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 text-xs font-mono uppercase tracking-widest shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                    System.Init()
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 mb-6 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    Blog Técnico
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 font-mono">
                    <span className="text-cyan-600 dark:text-cyan-500">&gt;</span> Extrayendo datos sobre desarrollo web moderno_
                    <span className="animate-pulse inline-block w-2 h-5 bg-cyan-600 dark:bg-cyan-400 align-middle ml-1"></span>
                </p>
                
                <div className="relative z-20">
                    <SearchBar />
                </div>
            </section>

            {!currentCategory && featuredPosts.length > 0 && (
                <section className="px-4">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-4xl md:text-5xl lg:text-4xl font-extrabold tracking-tight mb-6 text-white-900 dark:text-dark  transition-colors duration-300">
                            Archivos Destacados
                        </h2>
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                    </div>
                    <FeaturedPosts posts={featuredPosts} />
                </section>
            )}

            <div className="px-4">
                <CategoryFilter categories={categories} activeCategory={currentCategory} />
            </div>

            <section className="px-4">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-4xl md:text-5xl lg:text-4xl font-extrabold tracking-tight mb-6 text-white-900 dark:text-dark  transition-colors duration-300">
                        {currentCategory ? `Sector: ${currentCategory.toUpperCase()}` : 'Directorio Global'}
                        <span className="text-lg font-mono text-cyan-700 dark:text-cyan-500 ml-4 border border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10 px-2 py-1 rounded">
                            [{filteredPosts.length}]
                        </span>
                    </h2>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                </div>

                {paginatedPosts.length > 0 ? (
                    <PostGrid posts={paginatedPosts} />
                ) : (
                    <div className="text-center py-20 border border-dashed border-gray-300 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-[#0a0a0a]">
                        <h3 className="text-2xl font-mono text-cyan-600 dark:text-cyan-400 mb-4">
                            Not Found
                        </h3>
                        <p className="text-gray-500 font-mono">
                            {currentCategory ? `> Sector "${currentCategory}" vacío.` : '> La base de datos está vacía.'}
                        </p>
                    </div>
                )}
            </section>
        </div>
    );
}