import { aj } from "../config/arcjet";

const arcjetMiddleware = async (req , res , next) =>{

    try {
        const decision = await aj.protect(req);

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()){
                return res.status(429).json({error : 'Rate limit exceeded'});
            }

            if(decision.reason.isBot()){
                return res.status(403).json({error : 'Bot detected'});
            }

            return res.status(403).json({error : 'Access denied'});
        }
    } catch (error) {
        
        console.log("Arcjet middleware error : " , error);
        next(error);
    }
}

export default arcjetMiddleware;