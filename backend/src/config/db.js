import mongoose from "mongoose";

export const mongoDBconnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/security');
        console.log('mongoDb Connected');
    } catch (error) {
        throw { error: 'Please connect to the mongoDb connection' }
    }
}