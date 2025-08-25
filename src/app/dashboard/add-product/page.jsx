
import { getServerSession } from "next-auth";
import Formproduct from "./Formproduct";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AddProductPage() {
  
const session = await getServerSession(authOptions);
  console.log(session);

  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      {/* <h2 className="text-2xl text-base-content font-bold mb-4">Add Product</h2> */}
      <Formproduct></Formproduct>
    </div>
  );
}
