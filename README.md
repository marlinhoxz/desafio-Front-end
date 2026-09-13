# Desafio Front-end

Projeto desenvolvido como parte de um desafio de Front-end, com o objetivo de praticar desenvolvimento de interfaces, componentização e organização de projetos utilizando **Next.js, React e TypeScript**.

## Sobre o projeto

O projeto está sendo desenvolvido a partir de um desafio de Front-end, buscando reproduzir a interface proposta e aplicar boas práticas de desenvolvimento.

Durante o desenvolvimento, estou colocando em prática conceitos como:

* Componentização com React;
* Organização de projetos com Next.js;
* Tipagem com TypeScript;
* Estilização utilizando CSS Modules;
* Criação de layouts responsivos;
* Organização e reutilização de componentes.

## Tecnologias utilizadas

* [Next.js](https://nextjs.org/)
* React
* TypeScript
* CSS Modules
* Git
* GitHub

## Funcionalidades

* [ ] Implementação da interface proposta pelo desafio
* [ ] Layout responsivo
* [ ] Componentização da interface
* [ ] Interações da interface
* [ ] Ajustes de acessibilidade
* [ ] Refinamento visual

## Como executar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:

* [Node.js](https://nodejs.org/)
* npm

### Instalação

Clone o repositório:

```bash
git clone https://github.com/marlinhoxz/desafio-Front-end.git
```

Entre na pasta do projeto:

```bash
cd desafio-Front-end
```

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:3000
```

## Estrutura do projeto

O projeto utiliza o **App Router do Next.js**, mantendo as páginas dentro de `app` e os componentes reutilizáveis separados em `components`.

```text
desafio-Front-end/
│
├── public/
│   └── ...                     # Imagens e arquivos públicos
│
├── src/
│   │
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página inicial (/)
│   │   └── globals.css         # Estilos globais
│   │
│   └── components/
│       │
│       ├── header/
│       │   ├── header.tsx
│       │   └── ...
│       │
│       ├── sideNav/
│       │   ├── sideBar.tsx
│       │   └── ...
│       │
│       └── cards/
│           ├── cards.tsx
│           └── ...
│
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

### Organização das páginas

A pasta `app` é responsável pelas páginas e rotas da aplicação.

```text
src/app/
├── layout.tsx
├── page.tsx
└── globals.css
```

* `layout.tsx` → define o layout compartilhado da aplicação.
* `page.tsx` → representa a página inicial, acessível pela rota `/`.
* `globals.css` → contém os estilos globais.

### Organização dos componentes

Os componentes são separados em suas próprias pastas para facilitar a organização e manutenção do projeto.

```text
src/components/
├── header/
├── sideNav/
└── cards/
```

* `header` → componente responsável pelo cabeçalho.
* `sideNav` → componente responsável pela navegação lateral.
* `cards` → componentes responsáveis pela exibição dos cards.

## Aprendizados

Este projeto está sendo utilizado para aprimorar conhecimentos em:

* Next.js e App Router;
* React;
* TypeScript;
* Componentização;
* CSS Modules;
* Responsividade;
* Organização de código;
* Git e GitHub.

## Autor

Desenvolvido por **Marlon**.

* GitHub: [@marlinhoxz](https://github.com/marlinhoxz)
