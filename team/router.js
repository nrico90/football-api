const express = require("express");
const { Router } = express;
const Team = require("./model");

const router = new Router();

router.get("/team", (request, response, next) =>
  Team.findAll()
    .then(data => response.send(data))
    .catch(error => next(error))
);
router.post("/team", (request, response, next) => {
  Team.create(request.body)
    .then(team => response.send(team))
    .catch(errors => next(erros));
});

module.exports = router;
