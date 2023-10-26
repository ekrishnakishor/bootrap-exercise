const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/formapi', // Define the path you want to proxy, e.g., '/api'
    createProxyMiddleware({
      target: 'https://forms.maakeetoo.com',
      changeOrigin: true,
    })
  );
};
