const express = require('express');

const listUsers = (req, res) => {
  if (req.body.user_id) {
    return res.status(200).json({ "user id": req.body.user_id });
  }
  return res.status(200).json("ok");
}

const addUser = (req, res) => {
  return res.status(200).json("user added");
}

const editUser = (req, res) => {
  return res.status(200).json('edited');
}

const deleteUser = (req, res) => {
  return res.status(200).json("deleted");
}

module.exports = {
  listUsers,
  addUser,
  editUser,
  deleteUser
};
