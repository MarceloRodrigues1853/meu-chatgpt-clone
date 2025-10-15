# ChatGPT Clone

Este é um projeto de clone do ChatGPT, dividido em **`server`** (backend) e **`web`** (frontend), com o objetivo de estudar a integração entre um frontend moderno em React e uma API de IA.

## 🔗 Deploy

- **Frontend (GitHub Pages):** [**Acessar o ChatGPT Clone**](https://marcelorodrigues1853.github.io/meu-chatgpt-clone/)
- **Backend (Render):** [**https://meu-chatgpt-clone.onrender.com**](https://meu-chatgpt-clone.onrender.com)

- **Frontend**: Create React App (React) + Tailwind CSS.

- # **Backend**: Node.js + Express.

## 📁 Estrutura de Pastas

O repositório está organizado em um monorepo com duas pastas principais:

```
chatgpt-clone/
├─ server/   # Código do backend (Node.js)
└─ web/      # Código do frontend (React)
```

## ⚙️ Requisitos

- Node.js v18 ou superior.
- Uma chave de API válida (Groq, Google AI, etc.) configurada em um arquivo `.env` na pasta `server`.
- Para o deploy, o backend precisa estar hospedado em uma URL pública.

## 🚀 Como Rodar Localmente

Siga os passos abaixo para rodar o frontend e o backend em sua máquina local.

### Backend (`server`)

1. Navegue até a pasta do servidor:

   ```
   cd server
   ```

2. Instale as dependências:

   ```
   npm install
   ```

3. Inicie o servidor:

   ```
   npm run start
   ```

O backend estará rodando em `http://localhost:5555`. O endpoint principal utilizado pelo frontend é `http://localhost:5555/api/prompt`.

### Frontend (`web`)

1. Em um **novo terminal**, navegue até a pasta do frontend:

   ```
   cd web
   ```

2. Instale as dependências:

   ```
   npm install
   ```

3. Inicie a aplicação React:

   ```
   npm run start
   ```

Acesse o projeto no seu navegador em: `http://localhost:3000`.

## 🏗️ Build de Produção (Frontend)

Para criar a versão otimizada do frontend para deploy:

```
cd web
npm run build
```

Os arquivos finais para publicação serão gerados na pasta `web/build`.

## 📜 Licença

MIT License © 2025 Desenvolvido por Marcelo Rodrigues
