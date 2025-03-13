import mongoose from "mongoose";

export interface IMessage extends mongoose.Document {
  sender: mongoose.Types.ObjectId | string;
  content: string;
  chat: mongoose.Types.ObjectId | string;
  readBy: (mongoose.Types.ObjectId | string)[];
  createdAt?: Date;
}

const messageModel = new mongoose.Schema<IMessage>(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.models?.Message ||  mongoose.model<IMessage>("Message", messageModel);

export default Message;
