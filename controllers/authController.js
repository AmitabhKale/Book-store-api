const User = require("../models/userSchema");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("Please provide Email and Password");
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        _id: user.id,
        email: user.email,
        password: user.password,
        role: user.role,
        token: await user.generateAuthToken(),
      });
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      throw new Error("Please provide All Required Details");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User Already Exists in our database");
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: await user.generateAuthToken(),
    });
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};

module.exports = {
  login,
  register,
};
