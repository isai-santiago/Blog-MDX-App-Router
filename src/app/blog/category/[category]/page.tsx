import { getPostsByCategory, getCategories } from '../../../../../lib/posts';
import { PostGrid } from '../../../../../components/blog/PostGrid';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const categories = await getCategories();
    return categories.map((cat) => ({
        category: cat.slug,
    }));
}

export default async function CategoryPage({
    params
}: {
    params: Promise<{ category: string }>
}) {
    const { category } = await params;
    const posts = await getPostsByCategory(category);
    
    if (!posts || posts.length === 0) {
        notFound();
    }

    return (
        <div className="space-y-12 relative min-h-screen pb-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>
            
            <div className="py-16 px-4 text-center border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#050505]/50 backdrop-blur-sm">
                <div className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest">
                    query_sector: {category}
                </div>
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 capitalize mb-4">
                    Sector: {category}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-mono">
                    &gt; Mostrando todos los archivos extraídos
                </p>
            </div>
            
            <div className="px-4">
                <PostGrid posts={posts} />
            </div>
        </div>
    );
}