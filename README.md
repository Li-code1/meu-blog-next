# 📝 TravelBlog - Next.js CMS Estático

Este é um projeto de Blog moderno desenvolvido com **Next.js 14**, focado em performance, **SEO Dinâmico** e renderização híbrida. A aplicação utiliza o **App Router** para gerenciar rotas dinâmicas e **Server Components** para otimizar o carregamento de dados.

## 🎯 Objetivo do Projeto

Desenvolver um sistema de blog onde os artigos são carregados dinamicamente, garantindo que cada página seja otimizada para mecanismos de busca (Google) através de metadados específicos por postagem.

## 🚀 Funcionalidades

* **Server-Side Rendering (SSR):** Listagem de artigos processada no servidor.
* **Rotas Dinâmicas:** URLs amigáveis baseadas em slugs (ex: `/artigos/meu-primeiro-post`).
* **SEO Dinâmico:** Uso da função `generateMetadata` para títulos e descrições únicos por artigo.
* **SSG (Static Site Generation):** Implementação de `generateStaticParams` para pré-renderizar artigos em tempo de build.
* **Interface Limpa:** Design focado em legibilidade com botão de navegação de retorno.

## 🛠️ Tecnologias Utilizadas

* **Next.js 14** (App Router)
* **React** (Server Components)
* **JavaScript** (ES6+)
* **CSS Modules** & Estilização Global
* **Vercel** (Hospedagem e CI/CD)

## 📁 Estrutura de Pastas

```text
src/
├── app/
│   ├── layout.js          # Estrutura global e navegação
│   ├── page.js            # Home: Listagem de artigos (Server Component)
│   └── artigos/
│       └── [slug]/
│           └── page.js    # Página do Artigo (SEO + Rota Dinâmica)
├── data/
│   └── artigos.json       # Fonte de dados local (Simulação de API)
└── globals.css            # Estilização base e reset

```

## 🔧 Como Executar

1. **Instale as dependências:**
```bash
npm install

```


2. **Inicie o ambiente de desenvolvimento:**
```bash
npm run dev

```


3. **Build para produção:**
```bash
npm run build

```



## 🌐 Deploy

O projeto está configurado para deploy contínuo na **Vercel**. Toda atualização na branch `main` do GitHub dispara uma nova build automaticamente.

**Link do Projeto:** [https://github.com/Li-code1/meu-blog-next.git]

## 🧠 Conceitos Aplicados

* **SEO:** Implementação de metadados dinâmicos para melhorar o ranqueamento.
* **UX (User Experience):** Navegação fluida sem refresh de página com `next/link`.
* **Performance:** Redução do bundle enviado ao cliente através do uso de Server Components.

---

Desenvolvido por **[Liliane Lima]** como parte do desafio de Next.js.

---
