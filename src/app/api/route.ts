import { connectDB } from "@/lib/database";
import User from "@/models/userModel";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "./auth/[...nextauth]/auth";

export async function GET(req: NextRequest) {
  await connectDB();
  const session = await getServerSession(authOptions);
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("search")
    ? {
        $or: [
          { name: { $regex: searchParams.get("search"), $options: "i" } },
          { email: { $regex: searchParams.get("search"), $options: "i" } },
        ],
      }
    : {};

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const users = await User.find(keyword).find({
    _id: { $ne: session.user.id },
  });
  return NextResponse.json(users);
}
