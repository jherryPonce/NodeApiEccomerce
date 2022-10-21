const express = require('express');
const router = express.Router();
const Usersusers = require('./../services/userServices')
const user = new Usersusers;

router.get('/', async(req, res) => {
  const subCategories = await user.find();
  res.status(200).json(subCategories);
});

router.post('/',async(req, res)=>{
   const body = req.body;
   const newSubcategories = await user.create(body)
   res.status(201).json( newSubcategories)
})

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
 if(subCategories)
 res.status(200).json(subCategories);
 else
 res.status(400).json({message:'usuario no encontrada'});
})

router.delete('/:id',async (req, res) => {
 const { id } = req.params;
 const subCategoriesdelete = await user.delete(id)
 res.json(
   subCategoriesdelete
 );
});

module.exports=router;
