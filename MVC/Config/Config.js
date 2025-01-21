import {connect} from "mongoose"

connect("mongodb+srv://kananskaf206:ap123@cluster0.xlu29.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Successfully connected!");    
})