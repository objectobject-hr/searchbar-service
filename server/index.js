const express = require('express');
const parser = require('body-parser');
const dab = require("../database/index.js");

const app = express();
const PORT = 3002;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get("/searchbar", (req, res) => {
  dab.getProducts(req, (err, data) => {
    if (err) {
      console.log(`you're inside error if-statement`)
      console.error(err);
      res.status(404).send("error retrieving products");
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is listening on post apocalyptic ${PORT}`);
});