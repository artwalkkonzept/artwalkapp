module.exports = app => {
  const artwalks = require("../controllers/artwalk.controller.js");

  var router = require("express").Router();

  // Create a new Artwalk
  router.post("/", artwalks.create);

  // Retrieve all Artwalks
  router.get("/", artwalks.findAll);

  // Retrieve all published Artwalks
  router.get("/published", artwalks.findAllPublished);

  // Retrieve a single Artwalk with id
  router.get("/:id", artwalks.findOne);

  // Update a Artwalk with id
  router.put("/:id", artwalks.update);

  // Delete a Artwalk with id
  router.delete("/:id", artwalks.delete);

  // Create a new Artwalk
  router.delete("/", artwalks.deleteAll);

  app.use("/api/artwalks", router);
};
