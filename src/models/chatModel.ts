import mongoose from "mongoose";

export interface IChat extends mongoose.Document {
  chatName: string;
  isGroupChat: boolean;
  users: (mongoose.Types.ObjectId | string)[];
  latestMessage: mongoose.Types.ObjectId | string;
  groupAdmin: mongoose.Types.ObjectId | string;
  createdAt?: Date;
}

const chatModel = new mongoose.Schema<IChat>(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.models.Chat || mongoose.model<IChat>("Chat", chatModel);

export default Chat;