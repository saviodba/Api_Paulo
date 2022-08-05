require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

let app = express();

const PORT = 3000 || env.process.PORT;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


consign()
    .include('./src/routes')
    .include('./src/controllers')
    .include('./src/config')
    .into(app)


app.listen(PORT, () => {
    console.log("Server OnLine port : " + PORT)
})
