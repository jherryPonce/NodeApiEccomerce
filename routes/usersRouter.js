const express = require('express');
const router = express.Router();
const UsersServices = require('./../services/userServices')
const user = new UsersServices;

router.get('/', (req, res) => {

const users = user.find();
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(user.findOne(id));
});
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Creation',
    data: body
  });
});
module.exports=router;
