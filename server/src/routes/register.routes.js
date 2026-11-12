import { Router } from "express";
import multer from "multer"
import { registerChild } from "../controllers/register.controller.js";


const upload = multer({})
const router = Router();
router.route("/register").post(upload.none(),registerChild)
export default router;