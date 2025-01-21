import express from "express"
import "./Config/Config.js"
const app=express()
import cors from "cors"
import { config } from "dotenv"
import {route} from "./Routers/ProductRouters.js"
app.use(express.json())
app.use(cors())
config()

app.use("/products",route)
app.listen(3000,()=>{
    console.log("Port 3000")
})