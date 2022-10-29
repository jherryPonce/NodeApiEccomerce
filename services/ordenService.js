const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
class OrdenServices{
  constructor(){
  }

  create(body){
    const {status,envio_type,total,precioEnvioId,usuarioId} = body;
     const newOrden =  prisma.orden.create({
      data:{
        status,
        envio_type,
        total,
        precioEnvioId,
        usuarioId
      }
     })
     /* if(newOrden){
      const orderDetail = prisma.ordenProducto.create({
        
      })
     } */
   return newOrden;
  }
   find(){
    const ordenes =  prisma.orden.findMany()
    return ordenes;
  }
   findOne(id){
    const ordenId =  prisma.orden.findFirst({
      where: { id: parseInt(id) }
    })
    return ordenId;
  }
  update(id,data){
    const {status} = data;
    const ordenes = prisma.orden.update({
      where: { id: parseInt(id) },
      data: {
        status:status,
            },
    })
    return ordenes;
  }
  delete(id){
    const delet = this.update(id,{status:'cancelado'})
    return delet;
  }

  }
  module.exports = OrdenServices;
