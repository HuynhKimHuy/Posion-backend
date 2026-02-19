import express from 'express'
import asyncHandler from '../../middleware/asyncHandler.js'
import { sendDirectMessage, sendGroupMessage } from '../../controllers/MessageController.js'
import { checkFriendship } from '../../middleware/friendMiddleWare.js'
const MessageRouter = express.Router()

MessageRouter.post('/direct', checkFriendship, asyncHandler(sendDirectMessage))
MessageRouter.post('/group', asyncHandler(sendGroupMessage))

export default MessageRouter