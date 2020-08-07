const express = require('express');
const router = require('./routes');
const fileUploader = require('express-fileupload');

const appController = () => {
    const app = express();
    app.use(express.json());
    app.use(fileUploader());
    app.use(router);
    return app;
}

module.exports = appController;
