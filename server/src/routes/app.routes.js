import { Router } from "express";
import multer from "multer"
import { registerChild } from "../controllers/register.controller.js";
import { Login } from "../controllers/login.controller.js";


const upload = multer({})
const router = Router();
router.route("/register").post(upload.none(),registerChild)
router.route("/login").post(upload.none(),Login)

export default router;
