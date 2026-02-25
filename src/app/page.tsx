import Link from 'next/link';

export default function HomePage() {
    return (
        // CAMBIO CLAVE: bg-white (Día) | dark:bg-[#050505] (Noche)
        <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#050505] px-4 text-center relative overflow-hidden transition-colors duration-500">
            
            {/* Glow de fondo: Sutil en día, brillante en noche */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[100px] md:blur-[150px] pointer-events-none rounded-full -z-10 transition-opacity duration-500"></div>
            
            {/* Grid Tech: Gris claro en día (#e5e7eb), oscuro en noche */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10 transition-colors duration-500"></div>

            <div className="relative z-10 space-y-8 max-w-4xl mx-auto flex flex-col items-center">
                
                {/* Badge Status */}
                <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-100/50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-2 animate-pulse">
                    &gt; welcome &lt;
                </div>

                {/* Título: Gris oscuro en día, Blanco en noche */}
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight pb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-500">
                        Indaptados
                    </span>{' '}
                    <span className="text-slate-900 dark:text-white transition-colors duration-500">
                        Blog
                    </span>
                </h1>
                
                {/* Subtítulo: Gris medio a gris claro */}
                <p className="text-lg md:text-2xl text-slate-600 dark:text-gray-400 font-mono leading-relaxed max-w-2xl transition-colors duration-500">
                    Aprende desarrollo web moderno, React, Next.js y descubre las mejores prácticas de la industria.
                </p>

                {/* Botón Mejorado */}
                <div className="pt-8">
                    <Link 
                        href="/blog" 
                        className="group relative inline-flex px-10 py-5 bg-transparent text-cyan-700 dark:text-cyan-400 font-mono text-lg uppercase tracking-wider overflow-hidden border-2 border-cyan-400 dark:border-cyan-500/50 rounded-lg hover:border-cyan-600 dark:hover:border-cyan-400 transition-all duration-300 shadow-sm hover:shadow-cyan-500/20"
                    >
                        <div className="absolute inset-0 bg-cyan-500/5 dark:bg-cyan-500/10 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/20 transition-all duration-300"></div>
                        <span className="relative z-10 flex items-center gap-3 font-bold">
                            Explorar 
                            <span className="group-hover:translate-x-2 transition-transform duration-300">-&gt;</span>
                        </span>
                    </Link>
                </div>
            </div>
        </main>
    );
}