import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '../../../../lib/posts';
import { PostHeader } from '../../../../components/blog/PostHeader';
import { PostNavigation } from '../../../../components/blog/PostNavigation';
import { RelatedPosts } from '../../../../components/blog/RelatedPosts';
import { PostContent } from '../../../../components/blog/PostContent';

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Post not found' };
    return { title: post.title, description: post.description };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) notFound();
    const relatedPosts = await getRelatedPosts(post);

    return (
        <div className="relative min-h-screen pb-16">
            {/* FONDO DE CUADRITOS */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10 transition-colors duration-300"></div>
            
            <article className="max-w-4xl mx-auto px-4 relative z-10 pt-8">
                <PostHeader post={post} />

                {/* AQUÍ REGRESA EL RECUADRO: Blanco en día, Oscuro en noche */}
                <div className="mt-8 bg-white dark:bg-[#0a0a0a] rounded-2xl p-6 md:p-10 shadow-xl border border-gray-200 dark:border-gray-800 transition-colors duration-300">
                    <PostContent content={post.content} />
                </div>

                <div className="mt-12">
                    <PostNavigation post={post} />
                </div>
            </article>

            {relatedPosts.length > 0 && (
                <section className="mt-20 max-w-5xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white-900 dark:text-dark  transition-colors duration-300">
                        Archivos Relacionados
                    </h2>
                    <RelatedPosts posts={relatedPosts} />
                </section>
            )}
        </div>
    );
}