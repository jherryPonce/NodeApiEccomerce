const express = require('express');
const router = express.Router();
 const ProductsServices = require('./../services/productService')

//crear una instacia de ProductsServices
const service = new  ProductsServices();


router.get('/', async(req, res) => {
   const products = await service.find();
   res.status(200).json(products);
});

router.post('/',async(req, res)=>{
    const body = req.body;
    const newProduct = await service.create(body)
    res.status(201).json( newProduct)
})

//PATCH (Podemos enviar los parametros de forma parcial, no necesariamente todos)
router.get('/:id',async (req, res) => {
   const {id} = req.params;
   const productId = await service.findOne(id)
   if(productId)
      res.status(200).json(productId);
   else
    res.status(400).json({message:'Producto no encontrado'});
});

router.patch('/:id', async (req, res)=>{
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  if(product)
  res.status(200).json(product);
else
res.status(400).json({message:'Producto no encontrado'});
})

router.delete('/:id',async (req, res) => {
  const { id } = req.params;
  const productdelete = await service.delete(id)
  res.json(
    productdelete
  );
});


module.exports=router;

