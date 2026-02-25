import Image from 'next/image';

interface PostHeaderProps {
    post: {
        title: string;
        category: string;
        date: string;
        readingTime: number;
        coverImage?: string;
        author: {
            name: string;
            avatar: string;
        };
    };
}

export const PostHeader = ({ post }: PostHeaderProps) => {
    return (
        <header className="flex flex-col items-center text-center pt-10 pb-8">
            
            <div className="mb-4 text-sm font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
                {post.category}
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white-900 dark:text-dark  transition-colors duration-300">
    {post.title}
</h1>

            {/* Datos del autor: Gris oscuro de día, Gris claro de noche */}
            <div className="flex items-center justify-center gap-3 text-white-700 dark:text-black-300 font-medium text-sm md:text-base mb-8 transition-colors duration-300">
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
                        <Image
                            src={post.author.avatar || '/placeholder.jpg'}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Nombre del autor: Negro de día, Blanco de noche */}
                    <span className="text-white-900 dark:text-dark font-bold">{post.author.name}</span>
                </div>
                <span>•</span>
                <time dateTime={post.date}>{post.date}</time>
                <span>•</span>
                <span>{post.readingTime} min read</span>
            </div>

            {post.coverImage && (
                <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 mb-8">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}
        </header>
    );
};