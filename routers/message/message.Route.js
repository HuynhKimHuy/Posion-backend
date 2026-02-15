import express from 'express'
import asyncHandler from '../../middleware/asyncHandler.js'
import { sendDirectMessage, sendGroupMessage } from '../../controllers/MessageController.js'

const MessageRouter = express.Router()

MessageRouter.post('/direct', asyncHandler(sendDirectMessage))
MessageRouter.post('/group', asyncHandler(sendGroupMessage))

export default MessageRouter