import Subscription from "../models/subscription.model.js"

export const createSubscription =async (req , res , next) =>{

    try {
        
        const subscription = await Subscription.create({
            ...req.body,
            User : req.user._id,
        });

        res.status(201).json({
            success : true,
            data : subscription
        })
    } catch (error) {
        next(error)
    }
}

export const userSubscription = async (req , res , next) => {
    try {
        
        if(req.user.id !== req.params.id){
            const error = new Error("You are not the owener of this account!");
            error.statusCode = 401;
            throw error;
        }

        const subs = await Subscription.find({User : req.user.id});

        res.status(200).json({
            success : true,
            data : subs
        })
    } catch (error) {
        next(error)
    }
}