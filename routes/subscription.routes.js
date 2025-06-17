import { Router } from "express";
import authMiddleware from '../middleware/auth.middleware.js'
import { createSubscription ,  userSubscription} from "../controllers/subscription.controller.js";


const subscriptionRouter = Router();

subscriptionRouter.get('/' , (req , res) => res.send({title : "GET all subscriptions"}));

subscriptionRouter.get('/:id' , (req , res) => res.send({title : "GET subscriptions details"}));


subscriptionRouter.post('/' , authMiddleware ,createSubscription);


subscriptionRouter.put('/:id' , (req , res) => res.send({title : "Update subscriptions"}));

subscriptionRouter.delete('/:id' , (req , res) => res.send({title : "delete subscriptions"}));


subscriptionRouter.get('/user/:id' , authMiddleware ,userSubscription);


subscriptionRouter.put('/:id/cancel' , (req , res) => res.send({title : "cancel  subscriptions"}));

subscriptionRouter.get('/upcoming-renewals' , (req , res) => res.send({title : "Get upcoming subscription"}))






export default subscriptionRouter;