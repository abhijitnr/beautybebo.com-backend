const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* USER SIGNUP */
const userSignup = async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  const userPresent = await User.findOne({ email });

  if (userPresent?.email) {
    res.status(409).send({
      message: "User already exist!",
    });
  }
  try {
    bcrypt.hash(password, 10, async (err, encryptedPassword) => {
      const user = new User({
        firstName,
        lastName,
        email,
        phone,
        password: encryptedPassword,
      });
      await user.save();
      res.status(200).send({
        message: "Signup Successfully Done.",
      });
    });
  } catch (error) {
    res.status(500).send({
      message: "Error found !",
      error: error,
    });
  }
};

/* USER LOGIN */
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email });

    if (user.length > 0) {
      const hashed_password = user[0].password;

      bcrypt.compare(password, hashed_password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: user[0]._id },
            process.env.JWT_TOKEN
          );
          res.status(200).send({
            massege: "Login successfully Done.",
            token: token,
          });
        } else {
          res.status(401).send({
            message: "Unable to Login!",
          });
        }
      });
    } else {
      res.status(404).send({
        message: "User not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error found !",
      error: error,
    });
  }
};

module.exports = { userSignup, userLogin };
