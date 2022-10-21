/* createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
 */

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
class SubcategoriesServices{
  constructor(){
  }

  create(body){
    const {name,image,size} = body;
     const newSubcategory =  prisma.subCategoria.create({
      data:{
        name,
        image,size
      }
     })
   return newSubcategory;

  }
   find(){
    const subcategories =  prisma.subCategoria.findMany()
    return subcategories;
  }
   findOne(id){
    const categoryId =  prisma.subCategoria.findFirst({
      where: { id: parseInt(id) }
    })
    return categoryId;
  }
  update(id,data){
    const {name,image } = data;
    const categories = prisma.subCategoria.update({
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
  module.exports = SubcategoriesServices;
