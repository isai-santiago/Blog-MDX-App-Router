import Link from 'next/link';
import Image from 'next/image';
import { format, isValid } from 'date-fns';
import { es } from 'date-fns/locale';
import { Post } from '../../types/blog';

export function PostCard({ post }: { post: Post }) {
    let formattedDate = 'Sin fecha';
    if (post.date) {
        const dateObj = new Date(post.date);
        if (isValid(dateObj)) {
            formattedDate = format(dateObj, "d 'de' MMMM, yyyy", { locale: es });
        }
    }

    return (
        <Link 
            href={`/blog/${post.slug}`} 
            className="group relative flex flex-col bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-500 hover:border-cyan-500 dark:hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-1"
        >
            {/* Efecto de barra de carga superior neón */}
            <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full z-10"></div>

            {post.coverImage && (
                <div className="relative h-48 w-full overflow-hidden border-b border-gray-100 dark:border-transparent">
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent z-10"></div>
                    <Image 
                        src={post.coverImage} 
                        alt={post.title || 'Cover image'} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 dark:opacity-70 group-hover:opacity-100"
                    />
                </div>
            )}
            
            <div className="p-6 flex flex-col flex-grow relative z-20">
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/30 rounded-full uppercase tracking-widest">
                        {post.category || 'System'}
                    </span>
                    <span className="text-xs text-purple-600 dark:text-purple-400 font-mono">
                        &gt; {post.readingTime || 0} min_read
                    </span>
                </div>
                
                {/* Título: Gris oscuro de día, Blanco de noche */}
                <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 group-hover:from-cyan-600 group-hover:to-purple-600 dark:group-hover:from-cyan-300 dark:group-hover:to-purple-400 transition-all duration-300">
                    {post.title || 'Data Module Missing'}
                </h3>
                
                {/* Descripción: Gris de día, Gris claro de noche */}
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-6 flex-grow text-sm leading-relaxed">
                    {post.description || 'No description available in the current sector.'}
                </p>
                
                <div className="flex items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-800/50 group-hover:border-cyan-500/30 transition-colors">
                    <div className="text-xs text-gray-500 font-mono flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                        DATE: {formattedDate}
                    </div>
                </div>
            </div>
        </Link>
    );
}