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
    strategy: "jwt",
  },
  jwt: {
    encryption: false, // Disables JWT encryption
    secret: process.env.NEXTAUTH_SECRET,
  },
  cookies: {
    sessionToken: {
      name: "__Secure-authjs-session-token",  // This is the default cookie name
      options: {
        httpOnly: true,
        sameSite: "strict", // Adjust according to your needs
        path: "/",
        secure: true, // Use cookies only over HTTPS in production
      },
    },
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/user/createUser`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email, userName: user.name }),
          cache: "no-store",
        });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      return session;
    },
  },
  
});
