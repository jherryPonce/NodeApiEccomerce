const express = require('express');
const router = express.Router();
 const ProductsServices = require('./../services/productService')

//crear una instacia de ProductsServices
const service = new  ProductsServices();


router.get('/', async(req, res) => {
   const products = await service.find();
   try{
      res.status(200).json(products);
   }catch(err){
      res.status(500).json({
        message: err.message
      });
   }
});

router.post('/',async(req, res)=>{
    const body = req.body;
    const newProduct = await service.create(body)
    try{
      res.status(201).json( newProduct)
    }catch(err){
      res.status(500).json({
        message: err.message
      });
    }
})

//PATCH (Podemos enviar los parametros de forma parcial, no necesariamente todos)
router.get('/:id',async (req, res) => {
   const {id} = req.params;
   const productId = await service.findOne(id)
   try{
    if(productId)
      res.status(200).json(productId);
    else
      res.status(400).json({message:'Producto no encontrado'});
   }catch(err){
      res.status(500).json({
        message: err.message
      });
   }
});

router.patch('/:id', async (req, res)=>{
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  try{
    if(product)
      res.status(200).json(product);
    else
      res.status(400).json({message:'Producto no encontrado'});
  }catch(err){
    res.status(500).json({
      message: err.message
    });
  }
})

router.delete('/:id',async (req, res) => {
  const { id } = req.params;
  const productdelete = await service.delete(id)
  try{
    res.json(
      productdelete
    );
  }catch(err){
    res.status(500).json({
      message: err.message
    });
  }
});


module.exports=router;

