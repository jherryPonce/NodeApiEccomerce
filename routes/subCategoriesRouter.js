const express = require('express');
const router = express.Router();
const subCategoriesRouter= require('./../services/subcategoryService')
module.exports=router;

//crear una instacia de categoriesServices
const service = new  subCategoriesRouter();

router.get('/', async(req, res) => {
   const subCategories = await service.find();
   res.status(200).json(subCategories);
});

router.post('/',async(req, res)=>{
    const body = req.body;
    const newSubcategories = await service.create(body)
    res.status(201).json( newSubcategories)
})

//PATCH (Podemos enviar los parametros de forma parcial, no necesariamente todos)
router.get('/:id',async (req, res) => {
   const {id} = req.params;
   const subCategoriesId = await service.findOne(id)
   if(subCategoriesId)
      res.status(200).json(subCategoriesId);
   else
    res.status(400).json({message:'Subcategoria no encontrada'});
});

router.patch('/:id', async (req, res)=>{
  const { id } = req.params;
  const body = req.body;
  const subCategories = await service.update(id, body);
  if(subCategories)
  res.status(200).json(subCategories);
  else
  res.status(400).json({message:'subcategoria no encontrada'});
})

router.delete('/:id',async (req, res) => {
  const { id } = req.params;
  const subCategoriesdelete = await service.delete(id)
  res.json(
    subCategoriesdelete
  );
});


module.exports=router;
