require("dotenv").config()
const express = require('express');
const cors = require('cors')
const app = express()
const routeUser = require('./routes/index') 
const bodyParser = require('express')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended : false})
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(jsonParser)
app.use(urlencodedParser)

app.use("/user" , routeUser )

app.get("/" , (req, res, next) => res.send("Ohaiyo!"));

app.listen(PORT, () => 
  console.log(`Express server is ready on localhost ${PORT}`)
);
