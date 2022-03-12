const productsRouter = require('./products');

const initialRoutes = (app) => {
    app.use('/api/products', productsRouter);
};

module.exports = initialRoutes;
