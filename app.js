import express from "express";
import { PORT } from "./config/env.js";
import cookieParser from "cookie-parser";

//routers
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";   
import subscriptionRouter from "./routes/subscription.routes.js";
import workflowRouter from "./routes/workflow.route.js";

//db
import connectToDatabase from "./database/mongodb.js";

//middleware import
import errorMiddleware from "./middleware/error.middleware.js";
// import arcjetMiddleware from "./middleware/arcjet.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(arcjetMiddleware);

app.use('/api/v1/auth' , authRouter);
app.use('/api/v1/users' , userRouter);
app.use('/api/v1/subscriptions' , subscriptionRouter);
app.use('/api/v1/workflow' , workflowRouter);

app.use(errorMiddleware);


app.get('/' , (req , res)=>{
    res.send("Welcome to the subscription tracker app");
});


app.listen(PORT , () =>{
    console.log(`server is running on http://localhost:${PORT}`);

    connectToDatabase();
});


export default app;
