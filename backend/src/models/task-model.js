import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    task: {
        type: String,
        require: true
    },
    date: {
        type: Date
    }
})
export const Task = mongoose.model('Task', taskSchema)