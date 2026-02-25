// src/app/blog/layout.tsx
import { Header } from '../../../components/ui/UiHeader';
import { Footer } from '../../../components/ui/Footer';
import { getCategories } from '../../../lib/posts';

export default async function BlogLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const categories = await getCategories();

    return (
        // Agregamos flex y flex-col aquí
        <div className="flex flex-col min-h-screen">
            <Header categories={categories} />
            
            {/* Agregamos flex-grow aquí para que empuje el footer hacia abajo */}
            <main className="container mx-auto px-4 py-8 flex-grow">
                {children}
            </main>
            
            <Footer />
        </div>
    );
}