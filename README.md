# Horizon Hues

> Diário de viagem digital para registrar, editar, excluir e explorar suas aventuras com fotos e localização.

---

## 🌍 Sobre o Projeto

**Horizon Hues** é um aplicativo desenvolvido em **React** que funciona como um diário de viagem digital.

Os usuários podem se cadastrar, fazer login e criar entradas contendo textos, fotos (upload) e localização simples, tudo armazenado em um backend fake com **JSON Server**.

Um mapa exibe visualmente os locais das viagens de forma interativa e fácil de explorar.

---

## ✨ Funcionalidades

- 📝 Cadastro e login de usuários  
- ✍️ Criar, editar e apagar diários de viagem  
- 📸 Upload de imagens salvas no backend fake (JSON Server)  
- 🗺️ Visualização dos locais no mapa interativo (sem uso de APIs externas)  
- 🔒 Áreas protegidas para usuários autenticados  
- 🔄 Interface responsiva (desktop e mobile)  

---

## 🛠 Tecnologias Utilizadas

- **React** (componentes funcionais, hooks)  
- **React Router** (navegação entre páginas)  
- **Tailwind CSS** (estilização)  
- **JSON Server** (API fake local)  
- **Vite** (ferramenta de build e dev server)  

---

## 🚀 Instalação

### Pré-requisitos

- Node.js e npm instalados  
- JSON Server instalado globalmente:
  ```bash
  npm install -g json-server
  ```

### Passos para rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Rulian14/Trabalho-Diario-Viagem.git
   cd horizon-hues
   ```

2. Inicie o JSON Server (dentro da pasta onde está o `db.json`):
   ```bash
   json-server --watch db.json --port 3000
   ```

3. Em outro terminal, inicie a aplicação React:
   ```bash
   npm run dev
   ```

4. Acesse o projeto no navegador usando o link gerado no terminal.

---

## 📬 Contato

- Gustavo: [gustav0.chaic0usk@gmail.com](mailto:gustav0.chaic0usk@gmail.com)  
- Rulian: [rulian1403@gmail.com](mailto:rulian1403@gmail.com)  

---

## 👥 Contribuintes

- Gustavo Santos  
- Jhonatann Rulian Roth  
- Gustavo Kloster Jorge  
- João Vitor Loz
