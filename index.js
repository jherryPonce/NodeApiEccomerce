const express = require("express");
const routerApi = require("./routes");
//declaro faker , previamen6e instalado
/* const { faker } = require('@faker-js/faker'); */
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

//para pos es necesario usar midelware
app.use(express.json());

app.get('/', (req, res)=>{
  res.send("Mi tienda en express");
});
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});

routerApi(app)

