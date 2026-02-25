import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from '../../components/mdx/MDXComponents';

export const PostContent = ({ content }: { content: string }) => {
    return (
        // Quitamos "prose-slate" y "dark:prose-invert" para que deje de estorbar
        <div className="prose prose-lg max-w-none transition-colors duration-300">
            <MDXRemote source={content} components={MDXComponents} />
        </div>
    );
};