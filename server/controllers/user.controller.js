import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({ message: "api is working" });
};

export const userUpdate = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return errorHandler(403, "you are not allowed to update this user");
  }

  // server side validation

  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(403, "password must at lease 6 character"));
    }
    req.body = bcryptjs.hashSync(req.body.password, 10);
  }

  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username > 20) {
      return next(
        errorHandler(400, "username must be between 7 and 20 character")
      );
    }

    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "username cannot containe spaces"));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "Username must be lowercase"));
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Username can only contain letters and numbers")
      );
    }
  }

  //update reqst

  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          profilepicture: req.body.profilepicture,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updateUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const userDelete = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(404, "you are not allowed to delet this user"));
  }
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json("user has been deleted");
  } catch (error) {
    next(error);
  }
};

export const signout = async (req, res, next) => {

  try {
    res.clearCookie("access_token").status(200).json("user has been sign out");
  } catch (error) {
    next(error);
  }
};
