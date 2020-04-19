const express = require('express');
const config = require('./config');
const { port } = config;

const server = express();

server.use(express.json())
require('./utils')(config);
require('./routes/get')(server)
require('./routes/post')(server)
server.listen(port, () => console.log(`Server running on port ${port}`));