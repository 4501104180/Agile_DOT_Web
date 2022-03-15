const accountsRouter = require('./accounts');
const productsRouter = require('./products');
const categoriesRouter = require('./categories');

const initialRoutes = (app) => {
    app.use('/api/accounts', accountsRouter);
    app.use('/api/products', productsRouter);
    app.use('/api/categories', categoriesRouter);
};

module.exports = initialRoutes;
