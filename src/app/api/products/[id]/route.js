import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("myshop"); // change to your DB name

    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(params.id) });

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    // Convert _id to string
    return NextResponse.json({ ...product, _id: product._id.toString() });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching product", error }, { status: 500 });
  }
}
