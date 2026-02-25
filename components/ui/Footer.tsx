// components/ui/Footer.tsx
export function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 mt-12 py-8">
            <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
                <p>© {new Date().getFullYear()} Indaptados. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}