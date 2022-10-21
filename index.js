const express = require("express");
const routerApi = require("./routes");
//declaro faker , previamen6e instalado
/* const { faker } = require('@faker-js/faker'); */

const app = express();
const port = 3000;

//para pos es necesario usar midelware
app.use(express.json());

app.get('/', (req, res)=>{
  res.send("Mi tienda en express");
});
app.listen(port, () =>{
  console.log(`Listening at http://localhost:${port}`)
});

routerApi(app)


/* app.get('/otraRuta', (req, res)=>{
  res.send("Mi otra tienda en express");
});


app.all('/secret', (req, res, next) => {
  res.send('Accessing the secret section ...')
  next() // pass control to the next handler
})
app.get('/json/:id', (req, res)=>{


  res.json([{
    id:req.params.id,
    producto: req.params,
    precio:1
  },
  {
    id:req.params.id,
    producto: req.params,
    precio:200
  }
]);
});
/
app.get('/users', (req, res)=>{
  const {limit, offset} =req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
      //http://localhost:3000/users?limit=10&offset=300
    });
  }else{
    res.send('no hay parametros')
  }
}); */

