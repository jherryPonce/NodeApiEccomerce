const express = require('express');
const router = express.Router();
const categoriesRouter= require('./../services/categoryService')
module.exports=router;

//crear una instacia de categoriesServices
const service = new  categoriesRouter();

router.get('/', async(req, res) => {
   const categories = await service.find();
   try{
    res.status(200).json(categories);

  }catch(err){
    res.status(500).json(err);}
});

router.post('/',async(req, res)=>{
    const body = req.body;
    const newcategories = await service.create(body)
    try{
      res.status(201).json( newcategories)
    }catch(err){
      res.status(500).json(err);
    }
})

//PATCH (Podemos enviar los parametros de forma parcial, no necesariamente todos)
router.get('/:id',async (req, res) => {
   const {id} = req.params;
   const categoriesId = await service.findOne(id)
   try{
    if(categoriesId)
      res.status(200).json(categoriesId);
   else
      res.status(400).json({message:'categoria no encontrada'});
   }catch(err){
      res.status(500).json(err);
   }
});

router.patch('/:id', async (req, res)=>{
  const { id } = req.params;
  const body = req.body;
  const categories = await service.update(id, body);
  try{
    if(categories)
    res.status(200).json(categories);
    else
    res.status(400).json({message:'categoria no encontrada'});
  }catch(err){
    res.status(500).json(err);
  }
})

router.delete('/:id',async (req, res) => {
  try{
    const { id } = req.params;
    const categoriesdelete = await service.delete(id)
    res.json(
    categoriesdelete
    );
  }catch(err){
    res.status(500).json(err);
  }
});


module.exports=router;
