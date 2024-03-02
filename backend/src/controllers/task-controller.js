import { Task } from "../models/task-model.js"

export const createTaskController = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.json({
            data: task,
            status: true,
            message: 'Succesfully created the task'
        })
    } catch (error) {
        res.json({
            data: '',
            status: false,
            message: 'Unable to create the task'
        })
    }
}
export const getUserTaskController = async (req, res) => {
    try {
        const task = await Task.find({ userId: req.query.userId });
        res.json({
            data: task,
            status: true,
            message: 'Succesfully get all  the task'
        })
    } catch (error) {
        res.json({
            data: '',
            status: false,
            message: 'Unable to create the task'
        })
    }
}

