import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";
import {
  requireSignIn,
  isSeller,
  isBuyer,
} from "../middlewares/authMiddlewares.js";

//router object
const router = express.Router();

//routing
router.post("/register", registerController);
router.post("/login", loginController);

// authourized route
router.get("/check-token", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected buyer route auth
router.get("/check-buyer", requireSignIn, isBuyer, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected seller route auth
router.get("/check-seller", requireSignIn, isSeller, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
