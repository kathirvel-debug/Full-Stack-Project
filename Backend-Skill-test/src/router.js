import express from "express";
import productController from "./productController.js";
import { upload } from "../middelware/Fileupload.js";
const product = new productController();
const router = express.Router();
router.post('/create', upload.single('image'), (req, res) => {
   product.add(req, res);

})
router.get('/products', (req, res) => {
   product.getproduct(req, res);
})
router.post('/delete', (req, res) => {
   product.delete(req, res)
})
router.post('/update', (req, res) => {
   product.update(req, res)
})
router.post('/filter', (req, res) => {
   product.filter(req, res)
})

router.post('/search', (req, res) => {
   product.search(req, res)
})

export default router