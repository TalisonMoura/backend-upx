const express = require('express');
const consign = require('consign');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());


consign()
    .include('src/routes')
    .then('src/repositories')
    .then('src/controllers')
    .into(app);

console.clear();

app.listen(3003, function(){
    console.log('APP rodando na porta 3003');
});
