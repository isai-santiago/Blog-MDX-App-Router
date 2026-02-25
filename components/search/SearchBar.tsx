// src/components/search/SearchBar.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Atajo de teclado (Command/Ctrl + /) para enfocar el buscador
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === '/' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                inputRef.current?.focus();
                setIsOpen(true);
            }

            // Atajo para salir del buscador
            if (e.key === 'Escape') {
                setIsOpen(false);
                inputRef.current?.blur();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            // Redirige a la página de búsqueda con el query
            router.push(`/blog/search?q=${encodeURIComponent(query.trim())}`);
            setIsOpen(false);
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative max-w-lg mx-auto w-full">
            <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsOpen(true)}
                    placeholder="Buscar artículos... (⌘/)"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:border-blue-400 transition-colors bg-white dark:bg-gray-900"
                />
            </div>

            {query && (
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
                >
                    Buscar
                </button>
            )}
        </form>
    );
};