import { userSchema } from "./productSchema.js";
import mongoose from "mongoose";
// creating model from schema.
export const UserModel = mongoose.model('data', userSchema)
export default class UserRepository{
async addproduct(data){
try{
    const newproduct=new UserModel(data);
    await newproduct.save();
    return newproduct;
}
catch(err){
    console.log("error in db ");
    console.log(err);
    

}
    }

    async getAllDocuments() {
        try {
          // Find all documents in the MyModel collection
          const documents= await UserModel.find({});
      
         return documents;
        } catch (error) {
          console.error('Error fetching documents:', error);
        }
    }

    async deleteproduct(data){
        try{
            const documents=await UserModel.deleteOne({name:data})
            return documents
        }
        catch(err){
console.error('Error fetching documents:', err);
        }
    }
    async update(name,newdata){
        try{
            const documents=await UserModel.findOneAndUpdate(
                { name: name },newdata,
                { new: true } // Return the updated document
              );
            
            return documents
        }
        catch(err){

        }
    }

    async filterProducts(maxPrice=500,categories=[]) {
      console.log("price:",maxPrice)
      console.log("categories:",categories)
      try {
        const pipeline = [
          {
            $match: {
            $or: [
              {
                  $and: [
                      { price: { $gt: 0, $lte: maxPrice } },
                      { desc: { $in: categories } }
                  ]
              },
              {
                  price: { $gt: 0, $lte: maxPrice }
              },
              {
                desc: { $in: categories }
            }
          ]
        } 
          }
      ];
    
        const filteredProducts = await UserModel.aggregate(pipeline);
        return filteredProducts;
      } catch (error) {
        console.error('Error filtering products:', error);
        throw error;
      }
    }

      async searchvalue(searchName=''){
        try{
        const pipeline=[
            {
                $match: {
                  name: { $regex: new RegExp(searchName, 'i') }
                }
              } 
            ]

            const searchfilter=await UserModel.aggregate(pipeline)
            
            return searchfilter
        }
        catch(err){
            console.error('Error filtering products:',err);
        }
    }
    }