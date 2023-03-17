import mongoose from "mongoose";

const database = () => {
     mongoose.connect(process.env.MONGODB_URI)
     mongoose.set('strictQuery', true)
     console.log('Database Connected');
}

export default database;