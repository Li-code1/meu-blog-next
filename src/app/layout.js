import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <nav style={{ 
          background: '#fff', 
          padding: '1rem 0', 
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          textAlign: 'center' 
        }}>
          <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0070f3' }}>
            ✈️ TravelBlog
          </Link>
        </nav>
        
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>

        <footer style={{ textAlign: 'center', padding: '2rem', color: '#888', fontSize: '0.9rem' }}>
          © 2026 Blog de Viagens - Praticando Next.js
        </footer>
      </body>
    </html>
  );
}