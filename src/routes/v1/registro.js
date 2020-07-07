const routes = require('express').Router();
const RegistroController = require('../../controllers/RegistroController');


routes.get('/', RegistroController.index);
routes.get('/last', RegistroController.lastIndex);
routes.post('/', RegistroController.create);
routes.get('/:id', RegistroController.show);
routes.put('/:id', RegistroController.update);
routes.delete('/:id', RegistroController.destroy);

module.exports = routes;
