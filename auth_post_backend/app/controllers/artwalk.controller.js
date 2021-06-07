const config = require("../config/artwalk.config");
const db = require("../models");
const User = db.user;
const Role = db.role;


const Artwalk = db.artwalks;


// Create and Save a new Artwalk
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Artwalk
  const artwalk = new Artwalk({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save artwalk in the database
  artwalk
    .save(artwalk)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Artwalk."
      });
    });
};
// Retrieve all Artwalks from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Artwalk.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving artwalks."
      });
    });
};
// Find a single Artwalk with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Artwalk.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Artwalk with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Artwalk with id=" + id });
    });
};
// Update a Artwalk by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Artwalk.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Artwalk with id=${id}. Maybe Artwalk was not found!`
        });
      } else res.send({ message: "Artwalk was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Artwalk with id=" + id
      });
    });
};
// Delete a Artwalk with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Artwalk.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Artwalk with id=${id}. Maybe Artwalk was not found!`
        });
      } else {
        res.send({
          message: "Artwalk was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Artwalk with id=" + id
      });
    });
};
// Delete all Artwalks from the database.
exports.deleteAll = (req, res) => {
  Artwalk.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Artwalks were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Artwalks."
      });
    });
};
// Find all published Artwalks
exports.findAllPublished = (req, res) => {
  Artwalk.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving artwalks."
      });
    });
};


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var artwalkorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        artwalkorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: artwalkorities,
        accessToken: token
      });
    });
};
