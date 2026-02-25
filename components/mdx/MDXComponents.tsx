// components/mdx/MDXComponents.tsx
import Image from 'next/image';
import Link from 'next/link';
import { MDXComponents } from 'mdx/types';
import { CodeBlock } from './CodeBlock';
import { Callout } from './Callout';
import { ImageGallery } from './ImageGallery';

const components: MDXComponents = {
    // TEXTOS: Forzamos gris oscuro de día, blanco/gris claro de noche
    h1: ({ children, ...props }) => <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white" {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white" {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-white" {...props}>{children}</h3>,
    p: ({ children, ...props }) => <p className="mb-4 leading-relaxed text-gray-800 dark:text-gray-300" {...props}>{children}</p>,
    ul: ({ children, ...props }) => <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-800 dark:text-gray-300" {...props}>{children}</ul>,
    ol: ({ children, ...props }) => <ol className="mb-4 ml-6 list-decimal space-y-2 text-gray-800 dark:text-gray-300" {...props}>{children}</ol>,
    strong: ({ children, ...props }) => <strong className="font-bold text-gray-900 dark:text-white" {...props}>{children}</strong>,

    blockquote: ({ children, ...props }) => (
        <blockquote className="border-l-4 border-cyan-500 pl-4 py-2 mb-4 italic bg-cyan-50 dark:bg-cyan-900/20 text-gray-800 dark:text-gray-300" {...props}>
            {children}
        </blockquote>
    ),

    // CÓDIGOS: Agregamos "text-gray-200" al PRE para que el código siempre se lea sobre el fondo negro
    pre: ({ className, children, ...props }: any) => (
        <div className="relative mb-6 mt-4">
            <pre className={`bg-[#0d1117] p-4 rounded-xl overflow-x-auto text-sm border border-gray-300 dark:border-gray-800 shadow-md text-gray-200 ${className || ''}`} {...props}>
                {children}
            </pre>
        </div>
    ),

    code: ({ className, children, ...props }: any) => {
        if (className) return <code className={className} {...props}>{children}</code>;
        return <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-cyan-400" {...props}>{children}</code>;
    },

    a: ({ href, children, ...props }) => {
        const isExternal = href?.startsWith('http');
        const classes = "text-cyan-600 dark:text-cyan-400 hover:underline";
        if (isExternal) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>{children}</a>;
        return <Link href={href || '#'} className={classes} {...props}>{children}</Link>;
    },

    img: ({ src, alt, ...props }) => (
        <div className="relative mb-6">
            <Image src={src || '/placeholder.jpg'} alt={alt || ''} width={800} height={400} className="rounded-lg shadow-md" {...props} />
            {alt && <p className="text-center text-sm text-gray-500 mt-2">{alt}</p>}
        </div>
    ),

    table: ({ children, ...props }) => <div className="overflow-x-auto mb-6"><table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700" {...props}>{children}</table></div>,
    th: ({ children, ...props }) => <th className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 py-2 text-left font-semibold" {...props}>{children}</th>,
    td: ({ children, ...props }) => <td className="border border-gray-300 dark:border-gray-700 px-4 py-2" {...props}>{children}</td>,

    Callout,
    CodeBlock,
    ImageGallery
};

export default components;