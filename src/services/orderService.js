const esClient = require('../config/elasticsearch');

async function createOrder(order) {
  return await esClient.index({ index: 'pedidos', document: order });
}

async function searchOrder(query) {
  const { hits } = await esClient.search({
    index: 'pedidos',
    query: { match: { descricao: query } }
  });
  return hits.hits.map(hit => hit._source);
}

module.exports = { createOrder, searchOrder };
