import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/' , (req , res) => res.send({title : "GET all subscriptions"}));

subscriptionRouter.get('/:id' , (req , res) => res.send({title : "GET subscriptions details"}));


subscriptionRouter.post('/' , (req , res) => res.send({title : "CREATE subscriptions"}));


subscriptionRouter.put('/:id' , (req , res) => res.send({title : "Update subscriptions"}));

subscriptionRouter.delete('/:id' , (req , res) => res.send({title : "delete subscriptions"}));


subscriptionRouter.get('/user/:id' , (req , res) => res.send({title : "GET all user subscriptions"}));


subscriptionRouter.put('/:id/cancel' , (req , res) => res.send({title : "cancel  subscriptions"}));

subscriptionRouter.get('/upcoming-renewals' , (req , res) => res.send({title : "Get upcoming subscription"}))






export default subscriptionRouter;