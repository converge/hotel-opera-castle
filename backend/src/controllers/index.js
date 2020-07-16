const express = require('express');
const { version: index } = require('../../package.json');

const getVersion = (req, res) => {
    return res.status(200).json(index)
};

module.exports = getVersion;
