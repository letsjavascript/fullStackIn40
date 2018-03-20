const Express = require('express');
const app = Express();
const config = require('../config/config.js');

app.get('/', (req,res)=>{res.send('Yee-Haw, basic server')});

console.log('Server listening on port ' + config.server.port);
app.listen(config.server.port);
