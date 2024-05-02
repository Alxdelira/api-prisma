# Anotações referente ao ORM PRISMA 

### Instalar o PRISMA nas dependências de desenvolvimento

```bash
#Instalando Prisma como dependência de desenvolvimento
npm install prisma -D
```

```bash
#Iniciando o Prisma 
npx prisma init 
```

### Depois de iniciado vai gerar uma pasta chamado ``/prisma`` com arquivo ``shema.prisma`` e também cria um arquivo ``.env`` na raiz do projeto.


 - ``schema.prisma``
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // Já vem com "POSTEGRE SQL de padrão 
  url      = env("DATABASE_URL")
}
```

 - ``.env``
```prisma
//  Variavel de ambiente para conexão com o BD
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

### Depois de criar os modelos no ``schema.prisma`` precisa rodar a migração para criar as tabelas no Banco de Dados.

```bash
npx prisma migrate dev --name init

# O Prisma Já cria os relacionamentos que foram descristos nas models juntamente com o arquivo .sql com as linhas de codigos da criação das tabelas
```

