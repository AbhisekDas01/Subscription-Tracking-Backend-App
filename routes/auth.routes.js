import { Router } from "express";
import { singUp , signIn , signOut } from "../controllers/auth.controller";

const authRouter = Router();

//sign up
authRouter.post('/sign-up' , singUp);
//sign in 
authRouter.post('/sign-in' , signIn);
//sing out 
authRouter.post('/sign-out' , signOut);

export default authRouter;