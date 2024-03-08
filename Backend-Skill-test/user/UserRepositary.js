import { userSchemas } from "./userSchema.js";
import { UserModel } from "../src/productRepostriy.js";
import mongoose from "mongoose";
// creating model from schema.
const UserModels = mongoose.model('user',userSchemas);

export default class UserRepository{
async addproduct(data){
try{
    const newproduct=new UserModels(data);
    await newproduct.save();
    return newproduct;
}
catch(err){
    console.log("error in db ");
    console.log(err);

}
    }

    async find(user) {
        try {
       
          const username= await UserModels.findOne({name:user});
      
         return username;
        } catch (error) {
          console.error('Error in username:', error);
        }
    }

    async deleteproduct(data){
        try{
            const documents=await UserModels.deleteOne({name:data})
            return documents
        }
        catch(err){

        }
    }
    async removesCart(userID,data){
        console.log("testing",userID,data)
        try{
            const removed=await UserModels.updateOne(
                { _id: userID },
                { $pull: { carts: { name: data } } }
            )
            const updatedcart= await UserModels.findOne({_id:userID});
      
         return updatedcart;
        }
        catch(err){
            console.log("error",err)
        }
    }
    async updateCart(userId,productId){
        try{
            const cartData=await UserModel.findById(productId)
            const {name,desc,image,price}=cartData
            const userCart= await UserModels.findByIdAndUpdate(userId,{$push: { carts: {name,desc,image,price} }},{ new: true })
            return userCart
        }
        catch(err){
            console.error('Error in value:',err);
        }
    }
    
}