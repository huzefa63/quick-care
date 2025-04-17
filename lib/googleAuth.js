import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  
  callbacks: {
    // signIn callback to create user in your database
    async signIn({ user }) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/user/createUser`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email, userName: user.name }),
          cache: "no-store",
        });
        return true;
      } catch (err) {
        console.log("signIn error:", err);
        return false; // Return false if there's an error during signIn
      }
    },
    // session callback to include token data in the session
    async session({ session, token }) {
      session.user = token.user; // Attach user data from token to session
      return session;
    },
  },
});
