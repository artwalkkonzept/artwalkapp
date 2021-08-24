const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/artwalk.controller");


module.exports = app => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/artwalk/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/artwalk/signin", controller.signin);
//};


//module.exports = app => {
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

  // Update an Artwalk with id
  router.put("/:id", artwalks.update);

  // Delete an Artwalk with id
  router.delete("/:id", artwalks.delete);

  // Create a new Artwalk
  router.delete("/", artwalks.deleteAll);

  app.use("/api/artwalks", router);
};