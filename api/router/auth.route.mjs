import { Router } from "express";
import { signup, signin, google } from "../controller/auth.control.mjs";


const route = Router();

route.post('/signup', signup);

route.post('/signin', signin);

route.post('/google', google);

export default route;