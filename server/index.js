const express = require('express');
const parser = require('body-parser');

const app = express();
const PORT = 3002;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`server is listening on post apocalyptic ${PORT}`);
});