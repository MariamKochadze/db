const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
});

server.use(router);

// Global error handler
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

server.listen(3000, () => {
    console.log('JSON Server is running');
});

module.exports = server;
