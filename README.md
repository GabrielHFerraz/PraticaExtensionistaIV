# Plataforma de Questionários

Autor: Gabriel Henrique Ferraz da Silva

## Descrição do Projeto

Este projeto tem como objetivo de criar uma plataforma permitindo que organizações, pesquisadores e educadores possam desenvolver e distribuir questionários de maneira rápida e eficiente. O sistema permite a criação de questionários customizáveis, com perguntas de diferentes formatos (múltipla escolha, respostas curtas, classificações, entre outros), disponibilizando relatório das respostas.

## Funcionalidades Principais

- Criação de questionários customizáveis com diferentes tipos de perguntas.
- Distribuição dos questionários por meio de links ou códigos de acesso.
- Relatórios das respostas.
- Exportação de resultados em formatos como CSV e PDF para facilitar o processamento dos dados.
- Sistema de permissões, permitindo o acesso a diferentes níveis de usuários (administradores, respondentes, etc.).

## Tecnologias Utilizadas

- **Frontend**: React.
- **Mobile:** React Native;
- **Backend**: Java SpringBoot, com banco de dados PostgreSQL para armazenamento dos questionários e respostas.
- **Docker:** Rodar o banco de dados e a aplicação;

## Diagramas

Para melhor explicação do projeto foi desenvolvido três diagramas, sendo eles um correspondente ao fluxo de deploy do projeto, diagrama de aplicação explicando como funciona as informações desde o principio e outro referente a implantação, para melhor ilustrar esses diagramas foi utilizada a plataforma do Miro, que possibilita a visualização dos mesmo através do link abaixo:  <br/>
https://miro.com/app/board/uXjVKiPNtxw=/?share_link_id=364991852658 

## Protótipo no figma
https://www.figma.com/design/BfwgEbJGflkFQgtZpGByql/App-Question%C3%A1rio?node-id=0-1&t=Q5Lk9eKct8DQnzIx-1

## Rodar o Projeto

Neste projeto vamos utilizar algumas ferramentas que necessitam ser configuradas, para facilitar este processo foi utilizado o Docker, sendo assim na raíz do projeto existe um arquivo chamado docker-compose.yml, esse arquivo possui as configurações necessárias para subir a aplicação por completo, basta possuir o docker instalado na máquina e o docker-compose.

## Passo-a-passo para rodar o projeto
1 - Fazer o clone do repositório

Pré Requisito: Ter o docker e docker-compose em funcionamento.
2 - Navegar até a pasta raiz do projeto PraticaExtensionistaIV e rodar o comando:
  docker compose up -d 

Este comando vai executar o build tanto do frontend quanto do backend e criar os seus respectivos containers, além disso possui o nginx configurado como proxy reverso, desta forma rodando o docker compose, vamos ter a aplicação pronta para ser publicada em uma VPS por exemplo. 
