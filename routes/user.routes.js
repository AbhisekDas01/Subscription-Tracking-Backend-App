import { Router } from "express";
import { getUsers , getUserById } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get('/' , getUsers);


userRouter.get('/:id' , authorize ,getUserById);

userRouter.post('/' , (req , res)=>{
    return res.send({
        title : "CREATE new user"
    });
});

userRouter.put('/:id' , (req , res )=>{
    return res.send({
        title: "Update user"
    })
})

userRouter.delete('/:id' , (req , res) => {
    return res.send({

        title : "Delete user"
    })
});


export default userRouter;