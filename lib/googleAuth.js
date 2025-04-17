import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  session: {
    strategy: "jwt", // <-- THIS enables JWT session strategy
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/user/createUser`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email, userName: user.name }),
          cache: "no-store", // Ensures fresh data
        });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
      async session({ session, user }) {
        console.log("Session Callback Triggered:", session);
        return session; // ✅ Ensure session data is returned
      },
    async jwt({ token, user }) {
      // This is called when the JWT is created or updated
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Called whenever a session is checked
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      return session;
    },
  },
  secret:process.env.NEXTAUTH_SECRET
});
