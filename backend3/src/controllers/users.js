const express = require('express');
const { uploadFile, isBucketCreated } =  require('../services/aws-s3');

let userData = [];

const getUser = async (req, res) => {
    try {
      const x = await isBucketCreated('ok');
      return res.status(200).json(userData);
    } catch (error) {
      if (error.statusCode === 404) {
        return res.status(500).json(error);
      } else {
        return res.status(200).json('okkk');
      }
    }
};

const createUser = async (req, res) => {
  const { id, name } = req.body;
  const { profilePictureFile } = req.files;
  try {
    const uploadedFile = await uploadFile(profilePictureFile);
    userData.push({id, name, fileUrl: uploadedFile.Location });
    return res.status(201).send();
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { getUser, createUser };
