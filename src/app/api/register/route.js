import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
// import { bcrypt } from 'bcryptjs';
import bcrypt from "bcryptjs";


const uri = process.env.NEXT_PUBLIC_MONGODB_URI ; // Add in .env.local
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await client.connect();
    const db = client.db("myshop");
    const users = db.collection("users");

    // Check if user already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const result=await users.insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });


    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    // await client.close();
  }
}
