import mongoose from "mongoose";



const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(error)
        process.exit(1)
    
    }


}

export default connectDB;