"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-6">Login</h1>

      {/* Google Login
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        Sign in with Google
      </button> */}

      {/* Credential Login */}
      <form
        className="mt-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;

          await signIn("credentials", {
            email,
            password,
            callbackUrl: "/products",
          });
        }}
      >
        <input name="email" type="email" placeholder="Email" className="border p-2 m-2" />
        <br></br>
        <input name="password" type="password" placeholder="Password" className="border p-2 m-2" />
        <br></br>
        <button className="px-4 py-2 bg-green-500 text-white rounded">Login</button>
      </form>
    </div>
  );
}
