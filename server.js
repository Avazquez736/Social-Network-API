const express = require("express");
const routes = require("./routes");
const db = require("./config/connection");


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
