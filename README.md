
## FollowTheDev (Adonis Version)

O **FollowTheDev** é uma aplicação web construída com o intuito de facilitar o gerenciamento de links para canais de desenvolvedores ou digitais influencers.

## Tela inicial do Sistema

<p align="center"><img src="https://github.com/PHPauloReis/FollowTheDev/blob/main/github/sample.png?raw=true" width="600"></p>


### Instalação

Após clonar o projeto, certifique-se de que você tem o **Node.js** instalado

    node -v

Caso não tenha o **Node.js** Instalado, basta acessar o website do [Node.js](https://nodejs.org/en/) e seguir as instruções de instalação para a sua plataforma.

Uma vez que o Node.js esteja Instalado, basta executar o comando abaixo para instalar as dependências do projeto.

    npm install

Agora crie um arquivo chamado `.env` usando como base o arquivo `.env.example` presente no projeto.

Rode o comando `adonis key:generate` para criar a APP_KEY do seu projeto.

Volte ao arquivo .env e configure o banco de dados de sua preferência. Ex.:

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_USER=root
    DB_PASSWORD=
    DB_DATABASE=follow_the_dev

Agora basta rodar o comando `adonis serve --dev` e aproveitar o Follow The App.
