const express = require('express');
const router = express.Router();
const Usersusers = require('./../services/userServices')
const user = new Usersusers;

/* const jwt = require('jsonwebtoken'); */

//ecriptado
const bcrypt = require('bcrypt');

// validation
const Joi = require('@hapi/joi');

const schemaRegister = Joi.object({
  name: Joi.string().min(6).max(50).required(),
  email: Joi.string().min(6).max(50).required().email(),
  contrasena: Joi.string().min(8).max(150).required()
})

 const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(50).required().email(),
  contrasena: Joi.string().min(8).max(150).required()
})

router.get('/', async(req, res) => {
  const subCategories = await user.find();
  res.status(200).json(subCategories);
});

//////////////////////////////////////////////////////////////////////
//REGISTER
router.post('/register',async(req, res)=>{
    // validate user
    const { error } = schemaRegister.validate(req.body)

    if (error) {
        return res.status(400).json({error: error.details[0].message})
    }
    const isEmailExist = await user.findOne2({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json({error: 'Email ya registrado'})
    }
    try {
        const newUser = await user.create(req.body);
        res.status(201).json({
            error: null,
            data: newUser
        })
    } catch (error) {
        res.status(400).json({error:"fresa"})
    }
})
////////////////////////////////////////////////////////
router.post('/login', async (req, res) => {
  // validaciones
  const pasword= req.body.contrasena;
  const { error } = schemaLogin.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message })

  const users = await user.findOne2({ email: req.body.email });
  if (!users) return res.status(400).json({ error: 'Usuario no encontrado' });

  const validPassword =  bcrypt.compareSync( pasword,users.contrasena);
  if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
  try {
    res.json({
      error: null,
      data: 'exito bienvenido'

  })
} catch (error) {
    res.status(400).json({error:"fresa"})
}
})

///////////////////////////////////////////////////////

//PATCH (Podemos enviar los parametros de forma parcial, no necesariamente todos)
router.get('/:id',async (req, res) => {
  const {id} = req.params;
  const subCategoriesId = await user.findOne(id)
  if(subCategoriesId)
     res.status(200).json(subCategoriesId);
  else
   res.status(400).json({message:'usuario no encontrada'});
});

router.patch('/:id', async (req, res)=>{
 const { id } = req.params;
 const body = req.body;
 const subCategories = await user.update(id, body);
  try{
    if(subCategories)
      res.status(200).json(subCategories);
    else
      res.status(400).json({message:'usuario no encontrada'});
  }catch(error){
    res.status(500).json({message:'error interno'})
  }
})

router.delete('/:id',async (req, res) => {
 const { id } = req.params;
 const subCategoriesdelete = await user.delete(id)
  try{
    res.json(
      subCategoriesdelete
    );
  }catch(error){
    res.status(500).json({message:'error interno'})
  }
});

module.exports=router;
