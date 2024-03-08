import  express, { text }  from "express";
import user_controller from './UserController.js'
const UserController=new user_controller()
const userouter=express.Router();


userouter.post('/createuser',(req,res)=>{
    UserController.adduser(req,res)
})
userouter.post('/login',(req,res)=>{
UserController.signIn(req,res)
})
userouter.post('/cartItems',(req,res)=>{
    UserController.cartItem(req,res)
})
userouter.post('/removecart',(req,res)=>{
    UserController.removeCart(req,res)
})
export default userouter