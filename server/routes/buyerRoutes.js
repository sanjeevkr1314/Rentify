import express from "express";
import { likePropertyController, getAllPropertiesController } from "../controllers/buyerController.js";
import { getPropertyByIdController } from "../controllers/sellerController.js";
import { isBuyer, requireSignIn } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.get("/properties", getAllPropertiesController);
router.get("/property/:id", requireSignIn, isBuyer, getPropertyByIdController);
router.put("/like/:id", likePropertyController);

export default router;
