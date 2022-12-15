const express = require("express");
const {
  userSignup,
  userLogin,
  getUserById,
  getUsers,
  deleteUser,
} = require("../controllers/userController");

const userRoutes = express.Router();

/* SIGNUP */
userRoutes.post("/signup", userSignup);

/* LOGIN */
userRoutes.post("/login", userLogin);

/* GET ALL USER */
userRoutes.get("/", getUsers);

/* GET USER */
userRoutes.get("/:id", getUserById);

/* DELETE USER */
userRoutes.delete("/:id", deleteUser);

module.exports = userRoutes;

// firstName
// lastName
// email
// phone
// password
