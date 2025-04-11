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
  },
});
