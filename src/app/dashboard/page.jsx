import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1 className="text-2xl text-base-content font-bold">Welcome {session.user.name} 🎉</h1>
      <p>Email: {session.user.email}</p>
    </div>
  );
}

