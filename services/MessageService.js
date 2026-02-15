import Conversation from "../models/Conversation.js";
import updateConverStationAfteCreateMessage from '../helpers/messageHelper.js'
class messageService {
    static async sendDirectMessage(payload) {
        const { senderId, recipientId, content, conversationId } = payload;

        let conversation
        if (!content) throw new Error("Content is required")

        if (conversationId) {
            conversation = await Conversation.findById(conversationId)
        }
        if (!conversation) {
            conversation = await Conversation.create({
                type: "direct",
                participants: [
                    { userId: senderId, joinedAt: new Date() },
                    { userId: recipientId, joinedAt: new Date() }
                ],
                lastmessage: new Date(),
                unreadCount: new Map()
            })
        }
        const message = await Message.create({
            conversationId: conversation._id,
            senderId,
            content
        })
 
    }

    static async sendGroupMessage(payload) {
    }

}

export default messageService