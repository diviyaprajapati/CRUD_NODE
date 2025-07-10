import mongoose from "mongoose"


const connect = async()=>{
    try{ await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.5"),{
        UseNewUrlParser:true,
        UseUnifiedTopology:true
    }
console.log("connected to database");

    }
    catch(error){
console.error("Error connecting to database:", error.message);

    }

}
export default connect;

