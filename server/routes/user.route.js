import express from "express";
import { signUp } from "../controllers/auth.controller.js";
import {test,userUpdate,userDelete,signout } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifiedUser.js";

const router = express.Router();
router.get("/", test);
router.put("/update/:userId", verifyToken, userUpdate);
router.delete('/delete/:userId',verifyToken,userDelete);
router.post('/signout',signout);

export default router;
