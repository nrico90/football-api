const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const teamRouter = require("./team/router");

app.listen(port, () => console.log(`listening on :${port}`));

app.use(teamRouter);
