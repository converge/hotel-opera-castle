const app = require('./app');
require('dotenv').config();

const NODE_PORT= process.env.NODE_PORT || 3000;

app().listen(NODE_PORT, () => { console.log(`Backend is running at port ${NODE_PORT}`)});
