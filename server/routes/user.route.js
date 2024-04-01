import express from "express";
import { test } from "../controllers/user.controller.js";
import { signUp } from "../controllers/auth.controller.js";
import { userUpdate } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifiedUser.js";

const router = express.Router();
router.get('/',test)
router.put('/update/:userId',verifyToken,userUpdate)

export default router;