import { request } from "express";
import product_model from "./productmodel.js";
import productRepository from "./productRepostriy.js"
const product = new productRepository();
export default class productController {

    async add(req, res) {
        try {
            console.log(req.body);
            const { name, desc, price, size, } = req.body
            const { mimetype } = req.file;
            console.log(name)
            console.log("File", req.file.originalname); // Use req.file.originalname to get the original filename
            const filepath = req.file.originalname;
            const data = new product_model(name, desc, price, size, filepath)
            await product.addproduct(data)
            res.status(201).json({ data });
        }
        catch (err) {
            res.status(500).send("Internal Server Error");
        }


    }
    async getproduct(req, res) {
        try {
            const list = await product.getAllDocuments()
            if (list.length > 0) {
                console.log('All Documents:');
                console.log(list);
                res.status(200).json({ list })
            } else {
                console.log('No documents found.');
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        }

    }
    async filter(req, res) {
        try {
            console.log(req.body);
            const {maxprice, categories } = req.body
            const filterdata = await product.filterProducts(parseFloat(maxprice), categories)
            res.status(201).json({ filterdata })
            console.log(filterdata)
        }
        catch (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
    }
    async search(req, res) {
        try {
            const { name } = req.body
            const searchdata = await product.searchvalue(name)

            if (searchdata && searchdata.length > 0) {
                return res.status(200).json({ searchdata })
                console.log("ok")
            }
            else {
                return res.status(404).json({ message: "User not found" })
                console.log("not found")
            }
        }
        catch (err) {
            res.status(500).send("Internal error")
        }
    }
    async delete(req, res) {
        try {
            console.log(req.body);
            const { name } = req.body
            console.log(name)

            const data = await product.deleteproduct(name)
            res.status(200).send("Deleted");
        }
        catch (err) {
            res.status(500).send("Internal Server Error");
        }


    }
    async update(req, res) {
        try {
            const {name,newdata}=req.body
            

            const data = await product.update(name,newdata)
            res.status(200).json({data});
        }
        catch (err) {
            res.status(500).send("Internal Server Error");
        }
    }

} 
