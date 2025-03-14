import { NextRequest, NextResponse } from "next/server";
import {connectDB} from "@/lib/database";
import User from "@/models/userModel";

export async function GET(){
    const con = await connectDB();
    if(con) {
        return NextResponse.json({message: "Database connected successfully"}, {status: 200});
    }
}


export async function POST(request: NextRequest) {
    try {
        const {name, email, password} = await request.json();
        if(!name || !email || !password) {
            return NextResponse.json({message: "Please enter all fields"}, {status: 400});
        }

        await connectDB();
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return NextResponse.json({message: "User alreadyexists"}, {status: 400});
        }

        await User.create({name, email, password});
        return NextResponse.json({message: "User registered successfully"}, {status: 201});
    }
     catch (error) {
        return NextResponse.json({message: "Internal Server Error"}, {status: 500});
    }
}
