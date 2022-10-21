/* createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
 */

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
class SubcategoriesServices{
  constructor(){
  }

  create(body){
    const {name,image,size,categoriaId} = body;
     const newSubcategory =  prisma.subCategoria.create({
      data:{
        name,
        image,
        size,
        categoriaId
      }
     })
   return newSubcategory;

  }
   find(){
    const subcategories =  prisma.subCategoria.findMany()
    return subcategories;
  }
   findOne(id){
    const subcategoryId =  prisma.subCategoria.findFirst({
      where: { id: parseInt(id) }
    })
    return subcategoryId;
  }
  update(id,data){
    const {name,image,size } = data;
    const subcategories = prisma.subCategoria.update({
      where: { id: parseInt(id) },
      data: {
            name: name,
            image: image,
            size:size
            },
    })
    return subcategories;
  }
  delete(id){
    const delet = this.update(id)
    return delet;
  }

  }
  module.exports = SubcategoriesServices;
