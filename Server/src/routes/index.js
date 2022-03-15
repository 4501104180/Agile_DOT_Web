const accountsRouter = require('./accounts');
const productsRouter = require('./products');

const initialRoutes = (app) => {
    app.use('/api/accounts', accountsRouter);
    app.use('/api/products', productsRouter);
};

module.exports = initialRoutes;
