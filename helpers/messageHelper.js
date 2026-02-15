export const updateConverStationAfteCreateMessage = async (conversation, message, senderId) => {
    conversation.set({
        seenBy: [],
        lastMessageAt: message.createdAt,
        lastMessage: {
            _id: message._id,
            content: message.content,
            senderId: senderId,
            createdAt: message.createdAt
        }
    })
    consversation.participants.forEach((paticipant) => {
        const messageId = paticipant._id.toString()
        const isSender = memberId === senderId.toString()
        const prevCount = conversation.unreadCounts.get(memberId) || 0
        conversation.unreadCounts.set(memberId, isSender ? 0 : preCount + 1)
    })
}