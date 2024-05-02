import { register } from "../controller/register.controller";
import {Router} from "express"


const router = Router();

router.route("/register").post(register);

export {router};