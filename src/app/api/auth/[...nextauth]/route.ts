import NextAuth from 'next-auth';
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import userSignin from '@/libs/user/userSignin';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const user = await userSignin(credentials);
        console.log(user);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      console.log('token', token);
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
