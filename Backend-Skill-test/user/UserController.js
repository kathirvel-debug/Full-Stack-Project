import user_model from './Usermodel.js';
import UserRepository from './UserRepositary.js'
const userDB = new UserRepository();
export default class user_controller {

    async adduser(req, res) {
        try {
            console.log(req.body);
            const { name, pass } = req.body
            if(name!=null){
            const data = new user_model(name, pass)
            await userDB.addproduct(data)
            res.status(201).json({ data });
            }
            else{
                res.status(500).send("Username Is Empty");
            }
        }
        catch (err) {
            res.status(500).send("Internal Server Error");
        }

    }

    async cartItem(req, res) {
        try {
            const { userId, productId } = req.body

            const cartdata = await userDB.updateCart(userId, productId)
            console.log(cartdata);
            res.status(200).json({ cartdata })
        }
        catch (err) {
            console.log("something went wrong", err);
            res.status(500).send("went wrong")
        }
    }

    async removeCart(req,res){
        try{
            const {name,userID}=req.body
            // const userID="65ea1382fedd3a26c608f42f";
            // const name="pendrive"
            const removecart=await userDB.removesCart(userID,name)
            res.status(200).json({update:removecart.carts})
        }
        catch(err){
            console.log("Unable to remove the cart item ")
            res.status(500).send("went wrong")
        }
    }

    async signIn(req, res) {
        try {
            const { user, pass } = req.body
            const userdata = await userDB.find(user);
            console.log("DB data", userdata);


            if (!userdata) {
                // If user data is not found, return an error response
                return res.status(404).json({ message: "User not found" });
            }

            // Check if the provided password matches the stored password
            if (userdata.pass !== pass) {
                // If passwords do not match, return an error response
                return res.status(401).json({ message: "Invalid password" });
            }

            // If username and password are correct, send a success response
            res.status(200).json({ userId: userdata._id, name: userdata.name, carts:userdata.carts});
        }
        catch (err) {
            res.status(500).send("Internal Server Error");
        }
    }
}