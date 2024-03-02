import express from 'express';
import { getUserTaskController, createTaskController } from "../../controllers/task-controller.js";
import { signUpController, signInController, getAllUserController } from "../../controllers/user-controller.js";
import { authValidate } from "../../middlewares/auth-validate.js";
import { verifyId } from '../../middlewares/verifyUser.js';
export const routes = express.Router();

//AUTHENTICATION
routes.post('/user/register', authValidate, signUpController)
routes.post('/user/signin', signInController);
routes.get('/user', getAllUserController);


//TASK
routes.post('/task', createTaskController);
routes.get('/task', getUserTaskController);



