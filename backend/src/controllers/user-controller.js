import { User } from "../models/user-model.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const signInController = async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.json({
                data: 'Email does not already exist'
            })
        }
        const token = jwt.sign({ email: req.body.email }, 'uzer', { expiresIn: 60 });
        res.json({
            status: true,
            Token: token,
            data: user,
            message: 'Succesfully sign in the user'
        })
    } catch (error) {
        res.json({
            data: '',
            status: false,
            message: 'Unable to sign in the user',
            error: error
        })
    }
}


export const signUpController = async (req, res) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        console.log(hash);
        const response = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
        console.log(response);
        res.json({
            data: response,
            status: true,
            message: 'Succesfully sign up  the user'
        })
    } catch (error) {
        res.json({
            data: '',
            status: false,
            message: 'Unable to sign up  the user'
        })
    }
}

export const getAllUserController = async (req, res) => {
    try {
        const response = await User.find()
        res.json({
            data: response,
            status: true,
            message: 'Succesfully get all the user'
        })
    } catch (error) {
        res.json({
            data: '',
            status: false,
            message: 'Unable to get all the user'
        })
    }
}