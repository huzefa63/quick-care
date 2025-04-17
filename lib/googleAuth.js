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
    strategy: "jwt", // Store session as JWT instead of encrypted cookies
  },
  callbacks: {
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
        return false;
      }
    },
    async session({ session, token }) {
      return session;
    },
  },
  // Optional: custom cookie name
    },
  },
});
