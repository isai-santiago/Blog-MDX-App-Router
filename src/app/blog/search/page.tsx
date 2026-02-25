import { getAllPosts } from '../../../../lib/posts';
import { BlogSearchEngine } from '../../../../lib/search';
import { PostGrid } from '../../../../components/blog/PostGrid';
import { SearchBar } from '../../../../components/search/SearchBar';
import Link from 'next/link'; // <-- Añadimos Link para poder navegar

export default async function SearchPage({
    searchParams
}: {
    searchParams: Promise<{ q?: string }>
}) {
    const params = await searchParams;
    const query = params.q || '';

    const allPosts = await getAllPosts();
    const searchEngine = new BlogSearchEngine(allPosts);
    const searchResults = searchEngine.search(query).map(result => result.post);

    return (
        <div className="space-y-12 min-h-[70vh] relative">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10 transition-colors duration-300"></div>

            <section className="text-center py-16 px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white-900 dark:text-dark  transition-colors duration-300 dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    Base de Datos
                </h1>
                
                <SearchBar />

                {/* NUEVO: Botón global para regresar al blog */}
                <div className="mt-6">
                    <Link href="/blog" className="inline-block text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-mono text-sm transition-colors border-b border-transparent hover:border-cyan-500 pb-1">
                        &lt;- Volver al Directorio Global
                    </Link>
                </div>
            </section>

            <section className="px-4 max-w-7xl mx-auto">
                {query ? (
                    searchResults.length > 0 ? (
                        <>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 border-l-4 border-cyan-600 dark:border-cyan-500 pl-4 bg-cyan-50 dark:bg-cyan-500/10 py-3 rounded-r-lg">
                                Encontramos {searchResults.length} {searchResults.length === 1 ? 'resultado' : 'resultados'} para <span className="text-cyan-700 dark:text-cyan-400">"{query}"</span>
                            </h2>
                            <PostGrid posts={searchResults} />
                        </>
                    ) : (
                        <div className="text-center py-20 border border-dashed border-gray-300 dark:border-gray-800 rounded-2xl bg-white dark:bg-[#0a0a0a] shadow-lg max-w-3xl mx-auto">
                            <h3 className="text-2xl font-mono text-cyan-600 dark:text-cyan-400 mb-3">
                                Search Not Found
                            </h3>
                            <p className="text-gray-600 dark:text-gray-500 font-mono mb-8">
                                No encontramos ningún archivo que coincida con "{query}".
                            </p>
                            
                            {/* NUEVO: Botón de escape cuando la búsqueda falla */}
                            <Link href="/blog" className="inline-flex px-6 py-2 border border-cyan-600/50 dark:border-cyan-500/50 text-cyan-700 dark:text-cyan-400 rounded hover:bg-cyan-50 dark:hover:bg-cyan-500/10 transition-colors font-mono uppercase text-sm tracking-wider">
                                [ Limpiar Búsqueda ]
                            </Link>
                        </div>
                    )
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 dark:text-gray-600 font-mono text-lg animate-pulse">
                            &gt; Ingresa un término en la consola superior para iniciar la búsqueda_
                        </p>
                    </div>
                )}
            </section>
        </div>
    );
}