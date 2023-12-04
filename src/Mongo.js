const mongoose=requiere("mongoose")
mongoose.connect("mongodb://localhost:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch (()=>{
    console.log("failed")
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const collection = mongoose.model("collection", newSchema)

module.exports=collection