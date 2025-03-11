import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        const user = {
          name: "User",
          email: "harkirat",
          id: "user1",
        };
        if (user) {
          return user;
        }
        else
          {
          return null;
        }
      },
    }),
    
    GoogleProvider({
      clientId: "asdf",
      clientSecret: "asdff",
    })
  ],
  // secret: process.env.SECRET,
});

export { handler as GET, handler as POST };
