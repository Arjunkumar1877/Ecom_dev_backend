import mongoose from "mongoose";



export const connectDb = async()=>{
    try {
        const mongoUri = "mongodb+srv://fleetstoreDB_User:IDTTY3PCmYFmbQlO@fleetstorecluster.g4x09.mongodb.net/"
        if(mongoUri){
            await  mongoose.connect(mongoUri);
            console.log("mongoDb connected");
        } else {
            console.log("No uri available")
        }
    } catch (error) {
        console.log(error)
    }
}