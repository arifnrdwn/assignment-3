/* eslint-disable quotes */
/* eslint-disable no-console */
const express = require("express");

const app = express();
const router = require("./routers");

// const PORT = process.env.PORT;

const PORT = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

module.exports = app;