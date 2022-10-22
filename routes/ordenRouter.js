const express = require('express');
const router = express.Router();
const Orders = require('./../services/ordenService')
const order = new Orders;

router.get('/', async(req, res) => {
  const orden = await order.find();
  try{
      res.status(200).json(orden);
   }catch(err){
      res.status(500).json(err);
   }
});

router.post('/',async(req, res)=>{
   try{
      const body = req.body;
      const newOrder = await order.create(body)
      res.status(201).json( newOrder)
   }catch(err){
      res.status(500).json(err);
   }
})

//PATCH (Podemos enviar los parametros de forma parcial, no necesariamente todos)
router.get('/:id',async (req, res) => {
  const {id} = req.params;
  const orderId = await order.findOne(id)
  try{
   if(orderId)
     res.status(200).json(orderId);
   else
   res.status(400).json({message:'orden no encontrada'});
  }catch(err){
   res.status(500).json(err);
  }
});

router.patch('/:id', async (req, res)=>{
 const { id } = req.params;
 const body = req.body;
 const order = await order.update(id, body);
 try{
   if(order)
   res.status(200).json(order);
 else
   res.status(400).json({message:'orden no encontrada'});
 }catch(err){
   res.status(500).json(err);
 }
})

router.delete('/:id',async (req, res) => {
 const { id } = req.params;
 try{
   const orderdelete = await order.delete(id)
   res.json(
   orderdelete
   );
 }catch(err){
   res.status(500).json(err);
 }
});

module.exports=router;
