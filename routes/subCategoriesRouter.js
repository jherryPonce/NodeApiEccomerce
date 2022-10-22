const express = require('express');
const router = express.Router();
const subCategoriesRouter= require('./../services/subcategoryService')
module.exports=router;

//crear una instacia de categoriesServices
const service = new  subCategoriesRouter();

router.get('/', async(req, res) => {
   const subCategories = await service.find();
   try{
    res.status(200).json(subCategories);
   }catch(err){
    res.status(500).json(err);
   }
});

router.post('/',async(req, res)=>{
    const body = req.body;
    const newSubcategories = await service.create(body)
    try{
      res.status(201).json( newSubcategories)
    }catch(err){
      res.status(500).json(err);
    }
})

//PATCH (Podemos enviar los parametros de forma parcial, no necesariamente todos)
router.get('/:id',async (req, res) => {
   const {id} = req.params;
   const subCategoriesId = await service.findOne(id)
   try{
    if(subCategoriesId)
      res.status(200).json(subCategoriesId);
    else
      res.status(400).json({message:'Subcategoria no encontrada'});
   }catch(err){
      res.status(500).json(err);
   }
});

router.patch('/:id', async (req, res)=>{
  const { id } = req.params;
  const body = req.body;
  const subCategories = await service.update(id, body);
  try{
    if(subCategories)
      res.status(200).json(subCategories);
  else
    res.status(400).json({message:'subcategoria no encontrada'});
  }catch(err){
    res.status(500).json(err);
  }
})

router.delete('/:id',async (req, res) => {
  const { id } = req.params;
  try{
    const subCategoriesdelete = await service.delete(id)
    res.json(
      subCategoriesdelete
    );
  }catch(err){
    res.status(500).json(err);
  }
});


module.exports=router;
