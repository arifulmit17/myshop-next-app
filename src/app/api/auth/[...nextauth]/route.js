import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";

export const authOptions = {
//   providers: [
//     // ✅ Google OAuth
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),

//     // ✅ Optional: Custom credentials (username/password)
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         // Replace with your DB check
//         if (
//           credentials.email === "test@test.com" &&
//           credentials.password === "1234"
//         ) {
//           return { id: "1", name: "Test User", email: "test@test.com" };
//         }
//         return null;
//       }
//     })
//   ],
//   pages: {
//     signIn: "/login", // Custom login page
//   },
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      email: { label: "email", type: "email", placeholder: "Useremail" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
       const client = await clientPromise;
        const db = client.db("myshop"); // replace with your DB name

        const user = await db.collection("users").findOne({ email: credentials.email });
        console.log(user);
      // Add logic here to look up the user from the credentials supplied
      

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  })
],
pages: {
    signIn: "/login", // Custom login page
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
