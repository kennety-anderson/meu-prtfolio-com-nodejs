const http = require('http');
const colors = require('colors');
const path = require('path');
const port = process.env.PORT || 3000 || 8080;


http.createServer(app)
.listen(port, () => console.log(`Servidor rodando na porta ${port}`.cyan));