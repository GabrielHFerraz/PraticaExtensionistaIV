# Usar a imagem base do Node.js
FROM node:22 AS build

# Configurar diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código da aplicação para o container
COPY . .

# Construir a aplicação para produção (gerando a pasta 'dist')
RUN npm run build

# Fase final: usar uma imagem mais leve para servir os arquivos estáticos
FROM nginx:stable-alpine

# Configurar o diretório para os arquivos estáticos
COPY --from=build /app/dist /usr/share/nginx/html

# Adicionar configuração personalizada para o Nginx (caso necessário)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta 8081
EXPOSE 8081

# Iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
