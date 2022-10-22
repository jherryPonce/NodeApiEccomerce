const { faker } = require('@faker-js/faker');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
// constraseña
const bcrypt = require('bcrypt');

class UsersServices{

  constructor(){
    /* this.generate(); */
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
   create(body){
    //hash contraseña
    const saltRounds = 10;
    let {name,email,contrasena} = body;
    const password =  bcrypt.hashSync(contrasena, saltRounds);
    contrasena = password;
    const newUser=prisma.usuario.create({
      data:{
        name,
        email,
        contrasena
      }
    })
    return newUser
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
  findOne2(email){
    const usuarioEmail =  prisma.usuario.findFirst({
      where: { email: email.email}
    })

    return usuarioEmail;
  }

  findOne3(paswwor){
    const usuarioEmail =  prisma.usuario.findFirst({
      where: { contrasena:paswwor}
    })

    return usuarioEmail;
  }
  update(){

  }
  delete(){

  }
}
  module.exports = UsersServices;


