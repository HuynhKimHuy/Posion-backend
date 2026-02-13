import express from 'express'
import asyncHandler from '../../middleware/asyncHandler.js';
import { UserController } from '../../controllers/userController.js';
const UserRouter = express.Router()

UserRouter.get("/me", asyncHandler(UserController));

export default UserRouter