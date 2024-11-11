const Joi = require('joi');
const orderService = require('../services/orderService');
const { handleError } = require('../utils/errorHandling');

// Validação dos pedidos pedidos

const orderValidate = Joi.object({
  descricao: Joi.string().required(),
  quantidade: Joi.number().integer().min(1).required(),
  valor: Joi.number().precision(2).required()
});

async function createOrderHandler(request, h) {
  try {
    const { error } = orderValidate.validate(request.payload);
    if (error) throw { statusCode: 400, message: error.details[0].message };

    await orderService.createOrder(request.payload);
    
    return h.response({ message: 'Pedido criado com sucesso!' }).code(201);
  } catch (err) {
    return handleError(err, h);
  }
}

async function searchOrderHandler(request, h) {
  try {
    const orders = await orderService.searchOrder(request.query.query);
    return h.response(orders).code(200);
  } catch (err) {
    return handleError(err, h);
  }
}

module.exports = { createOrderHandler, searchOrderHandler };
