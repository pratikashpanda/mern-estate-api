import express from "express";
import {
  test,
  updateUser,
  deleteUser,
  signOutUser,
  getUserListings,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/signout", signOutUser)
router.get('/listings/:id', verifyToken, getUserListings)
export default router;
