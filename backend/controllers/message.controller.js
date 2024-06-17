import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
   try {
      const { message } = req.body;

      const { id: receiverId } = req.params;

      const senderId = req.user._id;

      if (receiverId === senderId) return res.status(400).json({ message: "You cannot send message to yourself" });

      let conversation = await Conversation.findOne({
         participants: { $all: [senderId, receiverId] }
      });

      if (!conversation) {
         conversation = await Conversation.create({
            participants: [senderId, receiverId]
         });
      }

      const newMessage = new Message({
         senderId,
         receiverId,
         message
      });

      if (newMessage) {
         conversation.messages.push(newMessage._id);
         await Promise.all([newMessage.save(), conversation.save()]);
      } else {
         return res.status(400).json({ message: "Message not sent" });
      }

      const receiverSocketId = getReceiverSocketId(receiverId);

      if (receiverSocketId) {
         // io.to(receiverSocketId).emit("newMessage", newMessage); // used to send message to a specific user
         io.to(receiverSocketId).emit("newMessage", newMessage);
      }

      return res.status(201).json({ message: "Message sent successfully", newMessage });

   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const getMessages = async (req, res) => {
   try {
      const { id: userToChatId } = req.params;

      const senderId = req.user._id;

      let conversation = await Conversation.findOne({
         participants: { $all: [senderId, userToChatId] }
      }).populate("messages");

      if (!conversation) return res.status(200).json([]);

      res.status(200).json(conversation.messages);

   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}