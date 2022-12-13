const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* USER SIGNUP */
const userSignup = async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  const userPresent = await User.findOne({ email });

  if (userPresent?.email) {
    res.send("User already exist!");
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
      res.send("Signup successfully done.");
    });
  } catch (error) {
    res.send(error);
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
          res.send({ massege: "Login successfully", token: token });
        } else {
          res.send("Unable to Login!");
        }
      });
    } else {
      res.send("User not found!");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { userSignup, userLogin };
