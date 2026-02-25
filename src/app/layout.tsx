import './globals.css';
import { Inter } from 'next/font/google';
import ThemeProvider from '../../components/ui/ThemeProvider'; 
import ThemeButton from '../../components/ui/ThemeButton';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        {/* El ThemeProvider debe ser el padre de TODO */}
        <ThemeProvider>
          <div className="fixed bottom-6 right-6 z-50">
            <ThemeButton />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}