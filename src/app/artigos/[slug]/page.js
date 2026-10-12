import artigos from '@/data/artigos.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return artigos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const artigo = artigos.find((a) => a.slug === params.slug);
  return {
    title: artigo ? `${artigo.titulo} | Blog` : 'Artigo',
    description: artigo?.descricao,
  };
}

export default async function PaginaArtigo({ params }) {
  const artigo = artigos.find((a) => a.slug === params.slug);

  if (!artigo) notFound();

  return (
    <div style={{ maxWidth: '750px', margin: '50px auto', padding: '0 20px' }}>
      {/* BOTÃO VOLTAR ESTILIZADO */}
      <Link href="/" style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '8px 16px',
        backgroundColor: '#eee',
        color: '#444',
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: '500',
        marginBottom: '30px'
      }}>
        ← Voltar para o início
      </Link>

      <article>
        <header style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.8rem', lineHeight: '1.2', marginBottom: '15px' }}>
            {artigo.titulo}
          </h1>
          <div style={{ color: '#888', display: 'flex', gap: '15px' }}>
            <span>👤 {artigo.autor}</span>
            <span>📅 {new Date(artigo.data).toLocaleDateString('pt-BR')}</span>
          </div>
        </header>

        <div style={{
          fontSize: '1.25rem',
          lineHeight: '1.8',
          color: '#2c3e50',
          textAlign: 'justify'
        }}>
          {artigo.conteudo}
        </div>
      </article>
    </div>
  );
}
