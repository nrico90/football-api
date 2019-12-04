const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
const teamRouter = require("./team/router");

app.listen(port, () => console.log(`listening on :${port}`));

const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(teamRouter);
