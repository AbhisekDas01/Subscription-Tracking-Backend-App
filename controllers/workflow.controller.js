import {createRequire} from 'module'
import dayjs from 'dayjs';

const require = createRequire(import.meta.url);

const {serve } =  require('@upstash/workflow/express');

import Subscription from '../models/subscription.model.js';


export const sendReminder = serve(async (context) => {

    const {subscriptionId} = context.requestPayload;

    const subscription = await fetchSubscription(context , subscriptionId)

    if(!subscription || subscription.status !== 'active') return ;

    const renewalDate = dayjs(subscription.renewalDate);

    
})

const fetchSubscription = async(context , subscriptionId) => {
    return await context.run('get subscripiton' , () => {
        return Subscription.findById(subscriptionId).populate('user' , 'name email');
    })
}