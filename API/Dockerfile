FROM maven:3.8.5-openjdk-17 AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração do Maven e o código-fonte para o contêiner
COPY pom.xml .
COPY src ./src

# Compila o projeto e cria o arquivo JAR
RUN mvn clean package

# Etapa 2: Execução da aplicação
# Usando uma imagem oficial do JDK para executar o jar
FROM  openjdk:17-jdk-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia o JAR gerado na etapa de construção para a imagem final
COPY --from=build /app/target/*.jar app.jar

# Define o comando para executar a aplicação
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
