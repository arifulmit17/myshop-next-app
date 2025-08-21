import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("myshop"); // your DB name
    const result = await db.collection("products").insertOne(body);

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
