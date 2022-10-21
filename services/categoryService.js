const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
class CategoriesServices{
  constructor(){
  }

  create(body){
    const {name,image} = body;
     const newCategory =  prisma.categoria.create({
      data:{
        name,
        image
      }
     })
   return newCategory;

  }
   find(){
    const categories =  prisma.categoria.findMany()
    return categories;
  }
   findOne(id){
    const categoryId =  prisma.categoria.findFirst({
      where: { id: parseInt(id) }
    })
    return categoryId;
  }
  update(id,data){
    const {name,image } = data;
    const categories = prisma.categoria.update({
      where: { id: parseInt(id) },
      data: {
            name: name,
            image: image
            },
    })
    return categories;
  }
  delete(id){
    const delet = this.update(id,{status:false})
    return delet;
  }

  }
  module.exports = CategoriesServices;
