# 🚚 Gerenciando logistica com Elasticsearch e Node.js

Este projeto fornece um serviço simples de logística construído com **Node.js (Hapi.js)** e **Elasticsearch** para gerenciar e pesquisar pedidos. 
A aplicação está conteinerizada usando **Docker** e **Docker Compose** para facilitar a configuração e o deploy.

## Funcionalidades ✨

- **Criar Pedidos**: O serviço permite que os usuários criem pedidos por meio de uma API REST.
- **Pesquisar Pedidos**: Os pedidos podem ser pesquisados por descrição utilizando o Elasticsearch para consultas rápidas e eficientes.
- **Dockerizado**: Todo o projeto, incluindo Elasticsearch e a aplicação Node.js, conteinerizado usando Docker.
- **Simples, Escalável e Extensível**: A arquitetura da aplicação foi projetada para ser simples, mas escalável, com espaço para futuras melhorias.

## Arquitetura 🏗️

- **Node.js com Hapi.js** para a API de backend.
- **Elasticsearch** para armazenar e consultar dados de pedidos.
- **Docker** para containerizar a aplicação e gerenciar as dependências.
  
## Configuração e Execução da Aplicação ⚙️

### 1. Clonar o Repositório

```bash
git clone https://github.com/yourusername/logistics-service.git
cd logistics-service
```

### 2. Configurar as Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto para configurar suas variáveis de ambiente:

```bash
ELASTICSEARCH_URL=http://elasticsearch:9200
PORT=3000
```

### 3. Subindo do Docker Compose 🐳
O projeto usa o Docker Compose para rodar tanto a aplicação Node.js quanto o Elasticsearch como containers. Para começar, execute o seguinte comando para construir e iniciar os serviços:

```bash
docker compose up --build
```

### 4. Testando os Endpoints ⚡
Crie um novo pedido envindo uma requisiçao **POST** para 

```bash
"http://localhost:3000/pedidos"
```

![image](https://github.com/user-attachments/assets/9331e053-66b4-46e4-865e-511766254a69)

### 5. Pesquisando um novo pedido:
Agora validando a busca e pesquisa nos pedidos de acordo com o conteudo da descriçao no endpoint da requisicao. Como por exemplo, a palavra chave: *"teste"*

```bash
"http://localhost:3000/pedidos?query=teste"
```

![image](https://github.com/user-attachments/assets/cfee11ea-9a54-45be-936d-2aed2e17591b)



