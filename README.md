# ChatGPT Clone

Este é um projeto de clone do ChatGPT, dividido em **`server`** (backend) e **`web`** (frontend), com o objetivo de estudar a integração entre um frontend moderno em React e uma API de IA.

- **Frontend**: Create React App (React) + Tailwind CSS.
- **Backend**: Node.js + Express.

## 📁 Estrutura de Pastas

O repositório está organizado em um monorepo com duas pastas principais:

```css
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

   ```bash
   cd server
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   npm run start
   ```

O backend estará rodando em `http://localhost:5555`. O endpoint principal utilizado pelo frontend é `http://localhost:5555/api/prompt`.

### Frontend (`web`)

1. Em um **novo terminal**, navegue até a pasta do frontend:

   ```bash
   cd web
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie a aplicação React:

   ```bash
   npm run start
   ```

Acesse o projeto no seu navegador em: `http://localhost:3000`.

## 🏗️ Build de Produção (Frontend)

Para criar a versão otimizada do frontend para deploy:

```bash
cd web

npm run build
```

Os arquivos finais para publicação serão gerados na pasta `web/build`.

## 📜 Licença

MIT License © 2025 Desenvolvido por Marcelo Rodrigues

--
