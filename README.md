# Desafio Full Cycle - Nginx como Proxy Reverso com Node.js e MySQL

Neste repositório está a solução do desafio Full Cycle, que envolve o uso do Nginx como proxy reverso, integrando uma aplicação Node.js e um banco de dados MySQL.

## O que foi feito

1. **Configuração do Nginx como proxy reverso**:  
   O Nginx foi configurado para encaminhar as requisições recebidas para a aplicação Node.js.

2. **Desenvolvimento da aplicação Node.js**:  
   A aplicação registra nomes em uma tabela chamada `people` no banco de dados MySQL e retorna:  
   ```html
   <h1>Full Cycle Rocks!</h1>
   ```
   Junto à lista de nomes cadastrados no banco.

3. **Configuração do MySQL**:  
   O banco de dados MySQL foi configurado para armazenar os registros, e sua inicialização foi integrada ao `docker-compose`.

4. **Criação do arquivo `docker-compose`**:  
   O arquivo `docker-compose.yml` foi criado para automatizar o processo de execução do projeto. Com ele, basta executar:  
   ```bash
   docker-compose up -d
   ```
   O sistema estará disponível na porta `8080`.

5. **Adição de volume para ambiente de desenvolvimento**:  
   Foi configurado um volume na aplicação Node.js para facilitar o desenvolvimento contínuo.

## Publicação

A imagem do projeto foi publicada no Docker Hub e pode ser acessada no seguinte link:  
[Docker Hub - Full Cycle Nginx Node](https://hub.docker.com/repository/docker/itpzzi/fullcycle-nginx-node)
