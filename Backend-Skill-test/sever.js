import express, { urlencoded } from 'express'
import cors from'cors'
import router from './src/router.js';
import userouter from './user/UserRouter.js';

import connectUsingMongoose from './config/mangoose.js'
const sever=express();
sever.use(express.json())

sever.use(cors());
sever.use('/api/ecom',router);
sever.use('/api/Login',userouter);
sever.listen(8007,()=>{
    console.log("sever is running");
    connectUsingMongoose();
})


