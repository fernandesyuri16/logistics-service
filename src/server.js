const Hapi = require('@hapi/hapi');
const orderController = require('./controllers/orderController');
require('dotenv').config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  });

  // Rota para criaçao de um pedido
  server.route({
    method: 'POST',
    path: '/pedidos',
    handler: orderController.createOrderHandler
  });

  // Rota para busca de pedidos
  server.route({
    method: 'GET',
    path: '/pedidos',
    handler: orderController.searchOrderHandler
  });

  await server.start();
  console.log('Servidor iniciado em %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

module.exports = init;
