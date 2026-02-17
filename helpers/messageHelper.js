const updateConverStationAfteCreateMessage = (conversation, message, senderId) => {
    conversation.set({
        seenBy: [],
        lastMessageAt: message.createdAt,
        lastMessage: {
            _id: message._id,
            content: message.content,
            senderId,
            createdAt: message.createdAt
        }
    })

    const senderIdString = senderId?.toString()
    if (!conversation.unreadCounts) conversation.unreadCounts = new Map()

    conversation.participants.forEach((participant) => {
        const memberId = participant?.userId?.toString?.() || participant?.toString?.()
        if (!memberId) return

        const isSender = memberId === senderIdString
        const prevCount = conversation.unreadCounts.get(memberId) || 0
        conversation.unreadCounts.set(memberId, isSender ? 0 : prevCount + 1)
    })
}
export default updateConverStationAfteCreateMessage
