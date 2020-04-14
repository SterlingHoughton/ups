const express = require('express');
const { port } = require('./config');

const server = express();

server.use(express.json())
require('./routes/get')(server)
server.listen(port, () => console.log(`Server running on port ${port}`));