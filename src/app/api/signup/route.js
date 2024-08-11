import { NextResponse } from "next/server";
import connectDB from "@/app/lib/MongoDB.js";
import User from "@/app/models/user.model.js";

export async function GET(req, context) {
  console.log(req);
  return NextResponse.json({ signup: "get request success" });
}

export async function POST(req) {
  const user = await req.json();
  console.log("user : ", user);
  if (user.password !== user.confirmPassword)
    return NextResponse.json({ error: "password does not match" });

  try {
    console.log("db before");
    await connectDB();
    console.log("db after");
    const newUser = new User({
      username: user.username,
      email: user.email,
      password: user.password,
    });
    const createdUser = await newUser.save();
    console.log("createdUser : ", createdUser);
    return NextResponse.json(
      { status: "success", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error in signup route: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
