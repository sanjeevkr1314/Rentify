import Joi from "joi";
import passwordComplexity from "joi-password-complexity";
import User from "../models/userModel.js";
import { hashPassword, comparePassword } from "../helpers/authHelper.js";

// User register controller
export const registerController = async (req, res) => {
  try {
    //validations
    const { error } = validateRegister(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    //check if user already exists
    const exisitingUser = await User.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res.status(409).send({
        success: false,
        message: "User already exists!",
      });
    }
    //hash password and save user
    const hashedPassword = await hashPassword(req.body.password);
    await new User({ ...req.body, password: hashedPassword }).save();

    res
      .status(201)
      .send({ success: true, message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

// User login controller
export const loginController = async (req, res) => {
  try {
    // validation
    const { error } = validateLogin(req.body);
    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    //check user
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(401)
        .send({ success: false, message: "Invalid Email or Password" });

    // check password
    const validPassword = await comparePassword(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res
        .status(401)
        .send({ success: false, message: "Invalid Email or Password" });

    // generate token
    const token = user.generateAuthToken();
    // console.log(token);

    res.status(200).send({
      success: true,
      user: {
        _id: user._id,
        fName: user.firstName,
        lName: user.lastName,
        email: user.email,
        buyer: user.buyer,
      },
      token,
      message: "Logged in successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

const validateRegister = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    phoneNumber: Joi.string().required().label("Phone Number"),
    buyer: Joi.boolean().required().label("Buyer"),
  });
  return schema.validate({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    phoneNumber: data.phoneNumber,
    buyer: data.buyer,
  });
};

const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};
