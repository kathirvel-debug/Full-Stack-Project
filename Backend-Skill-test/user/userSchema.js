import mongoose from "mongoose";

export const userSchemas = new mongoose.Schema({
    name: String,
    pass: String,
    carts: {
        type: Array,
        default: []
    },
    purchase: {
        type: Array,
        default: []
    }
})