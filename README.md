# API de Transferências e Usuários

Esta API permite registro, login, consulta de usuários e transferências de valores entre usuários. O objetivo é servir de base para estudos de testes e automação de APIs.

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente.
2. Instale as dependências:

```
npm install express swagger-ui-express
```

## Executando a API

```
node server.js
```

A API estará disponível em `http://localhost:3000`.

Acesse a documentação Swagger em: `http://localhost:3000/api-docs`

## Endpoints

- `POST /users/register` — Registro de usuário
- `POST /users/login` — Login de usuário
- `GET /users` — Listar usuários
- `POST /transfers` — Transferir valores

## Regras de Negócio

- Login exige usuário e senha.
- Não é permitido registrar usuários duplicados.
- Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos.
- O banco de dados é em memória (os dados são perdidos ao reiniciar o servidor).

## Estrutura do Projeto

- `app.js` — Configuração do Express e rotas
- `server.js` — Inicialização do servidor
- `controller/` — Controllers das rotas
- `service/` — Lógica de negócio
- `model/` — Modelos e dados em memória
- `swagger.json` — Documentação Swagger

## Testes

A API foi estruturada para facilitar testes automatizados, especialmente com Supertest.
