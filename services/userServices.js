const { faker } = require('@faker-js/faker');

class UsersServices{

  constructor(){
    this.users=[],
    this.generate();
  }

  generate(){
    const length = 5;
    for (let i = 0; i < length; i++) {
      this.users.push({
        id:faker.datatype.uuid(),
        name:faker.name.fullName(),
        image:faker.image.avatar(),
      })
    }

  }
  create(){

  }
  find(){
   return this.users;
  }
  findOne(id){
  return this.users.find(item => item.id === id);
  }
  update(){

  }
  delete(){

  }
}
  module.exports = UsersServices;


