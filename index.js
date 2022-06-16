const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const personRouter = require("./app/person/router");

// morgan
app.use(morgan("dev"));
// cors
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    exposedHeaders: "x-total-data",
  })
);
// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// person router
app.use("/api/person", personRouter);

app.listen(port, () => {
  console.log(`course api running on port ${port}`);
});
