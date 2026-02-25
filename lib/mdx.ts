import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import MDXComponents from '../components/mdx/MDXComponents';

export async function parseMDX(source: string) {
    return await compileMDX({
        source,
        components: MDXComponents,
        options: {
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug],
            },
            parseFrontmatter: true,
        },
    });
}