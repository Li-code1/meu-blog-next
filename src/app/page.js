import Link from 'next/link';
import artigos from '@/data/artigos.json';

export default async function BlogHome() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ marginBottom: '40px', textAlign: 'center' }}>Últimas do Blog</h1>
      
      {artigos.map((artigo) => (
        <div key={artigo.id} style={{ 
          background: '#fff', 
          padding: '25px', 
          borderRadius: '12px', 
          marginBottom: '20px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ margin: '0 0 10px 0' }}>{artigo.titulo}</h2>
          <p style={{ color: '#666', marginBottom: '15px' }}>{artigo.descricao}</p>
          <Link href={`/artigos/${artigo.slug}`} style={{ 
            color: '#0070f3', 
            fontWeight: '600' 
          }}>
            Ler mais →
          </Link>
        </div>
      ))}
    </div>
  );
}