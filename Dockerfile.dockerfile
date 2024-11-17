# Use a imagem oficial do PostgreSQL
FROM postgres:latest

# Adicione qualquer configuração ou scripts de inicialização, se necessário
# COPY ./init.sql /docker-entrypoint-initdb.d/

# Não é necessário fazer mais nada se você só precisa do PostgreSQL
