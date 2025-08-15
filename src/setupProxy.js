const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove /api prefix
      },
      onError: (err, req, res) => {
        console.log('Proxy error:', err);
        res.status(500).send('Proxy error');
      },
      logLevel: 'debug'
    })
  );
};