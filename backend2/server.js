const app = require('./app');

const NODE_PORT=3000;

app().listen(NODE_PORT, () => console.log(`Running at Port ${NODE_PORT} ...`));
