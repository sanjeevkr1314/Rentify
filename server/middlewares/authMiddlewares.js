import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

//Protected Routes check login
export const requireSignIn = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWTPRIVATEKEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//Protected Routes Seller
export const isSeller = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    // console.log(user);
    if (user.buyer === "true") {
      res.status(403).send({ message: "Forbidden" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

//Protected Routes Buyer
export const isBuyer = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    // console.log(user);
    if (user.buyer === "false") {
      res.status(403).send({ message: "Forbidden" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
