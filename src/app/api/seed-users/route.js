import clientPromise from "@/lib/mongodb";
import bcrypt, { hash } from "bcrypt";


export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("myshop");

    const users = [
      { name: "Kabul", email: "kolmi@lota.com", password: await hash("1234", 10) },
      { name: "John", email: "john@doe.com", password: await hash("1234", 10) },
      { name: "Jane", email: "jane@smith.com", password: await hash("1234", 10) }
    ];

    await db.collection("users").insertMany(users);

    return new Response(JSON.stringify({ message: "Users inserted!" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to insert users" }), { status: 500 });
  }
}
