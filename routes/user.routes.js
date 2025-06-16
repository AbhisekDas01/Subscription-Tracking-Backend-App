import { Router } from "express";

const userRouter = Router();

userRouter.get('/' , (req ,res) =>{

    return res.send({
        title: "GET all users"
    });
});


userRouter.get('/:id' , (req , res) => {
    return res.send({
        title: "GET user details"
    });
});

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