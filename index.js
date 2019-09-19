const express = require('express');
const app = express()
const routeUser = require('./routes/users') 
const bodyParser = require('express')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended : false})
app.use(jsonParser)
app.use(urlencodedParser)

app.use("/user" , routeUser )

app.get("/" , (req, res, next) => res.send("Ohaiyo!"));

app.listen(3000, () => 
  console.log("Express server is ready on localhost 3000")
);
