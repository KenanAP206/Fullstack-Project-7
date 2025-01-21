import {Schema, model} from 'mongoose'

let ProductSchema = new Schema({
    name:String,
    desc:String,
    price:Number,
    isSale:Boolean,
    image:String
})

export let ProductModel=model("products",ProductSchema)