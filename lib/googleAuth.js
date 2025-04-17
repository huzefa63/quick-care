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
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Must match the secret in your backend
    encryption: false, // Must remain false so backend can decode it
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id ?? null;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },
  // Optional: custom cookie name
  cookies: {
    sessionToken: {
      name: "next-auth.session-token", // Keep default or customize if needed
      options: {
        httpOnly: true,
        sameSite: "strict",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
});
