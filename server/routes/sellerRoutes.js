import express from "express";
import {
  addNewPropertyController,
  deletePropertyController,
  getAllOwnedPropertiesController,
  getPropertyByIdController,
  updatePropertyController,
} from "../controllers/sellerController.js";
import { isSeller, requireSignIn } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.post("/new-property", requireSignIn, isSeller, addNewPropertyController);
router.get("/my-properties/:id", requireSignIn, isSeller, getAllOwnedPropertiesController);
router.get("/property/:id", requireSignIn, isSeller,  getPropertyByIdController);
router.put("/property/:id", requireSignIn, isSeller,  updatePropertyController);
router.delete("/property/:id", requireSignIn, isSeller,  deletePropertyController);

export default router;
