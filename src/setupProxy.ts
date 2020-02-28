import react from 'react';
const proxy = require('http-proxy-middleware')

module.exports = (app: any) => {
    app.use(proxy('/api/*', { target: 'http://localhost:5000' }))
}
