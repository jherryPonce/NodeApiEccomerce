const { faker } = require('@faker-js/faker');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
class UsersServices{

  constructor(){
    this.generate();
  }

  async generate(){
    const length = 5;
    for (let i = 0; i < length; i++) {

      await  prisma.usuario.create({
        data:{
        name:faker.name.fullName(),
        email:faker.internet.exampleEmail(),
        contrasena:faker.internet.password(),
        image:faker.image.avatar(),}
      })
    }

  }
  create(){

  }
  find(){
    const users = prisma.usuario.findMany();
   return users;
  }
  findOne(id){
    const usuarioId =  prisma.usuario.findFirst({
      where: { id: parseInt(id) }
    })
    return usuarioId;
  }
  update(){

  }
  delete(){

  }
}
  module.exports = UsersServices;


