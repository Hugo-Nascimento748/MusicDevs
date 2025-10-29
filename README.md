# MusicDevs 

Um sistema simples de cadastro e busca de músicas, feito em Node.js com TypeScript e PostgreSQL.

## Funcionalidades
- Adicionar músicas com nome, banda e produtora
- Buscar músicas por nome, banda ou produtora (busca parcial)
- Listar todas as músicas cadastradas

## Tecnologias Utilizadas
- Node.js
- TypeScript
- PostgreSQL
- Biblioteca `pg` para conexão com o banco
- Biblioteca `readline-sync` para interação via terminal

## Estrutura do Projeto
```
MusicDevs/
├── src/
│   ├── db.ts           # Configuração da conexão com o banco
│   ├── index.ts        # Entrada principal e menu
│   ├── MusicaModel.ts  # Funções de manipulação das músicas
├── package.json        # Dependências e scripts
├── tsconfig.json       # Configuração do TypeScript
└── README.md           # Documentação do projeto
```

## Pré-requisitos
- Node.js instalado
- PostgreSQL rodando localmente
- Banco de dados criado (ex: `db_hugo`)
- Tabela criada:

```sql
CREATE TABLE musica (
  nome VARCHAR(255),
  banda VARCHAR(255),
  produtora VARCHAR(255)
);
```

## Instalação
1. Clone o repositório:
	```bash
	git clone https://github.com/Hugo-Nascimento748/MusicDevs.git
	cd MusicDevs
	```
2. Instale as dependências:
	```bash
	npm install
	```
3. Compile o TypeScript:
	```bash
	npx tsc
	```
4. Configure o banco de dados em `src/db.ts` se necessário (usuário, senha, nome do banco).

## Como usar
1. Execute o programa:
	```bash
	node dist/index.js
	```
2. Siga o menu interativo para adicionar, buscar ou listar músicas.

## Exemplo de uso
```
Bem-vindo ao MusicDevs!

1 - Adicionar música
2 - Buscar música
3 - Listar todas as músicas
0 - Sair
Escolha: 1
Nome da música: Bohemian Rhapsody
Banda: Queen
Produtora: EMI
Música adicionada: { nome: 'Bohemian Rhapsody', banda: 'Queen', produtora: 'EMI' }
```

## Integrantes
- Alex Sandro Teles Silveira RA: 2510122
- Caio Felipe Martins de Camargo RA: 2522475
- Hugo Nascimento RA: 2509669
- Mateus Ramos Medeiros RA: 2508960

---
