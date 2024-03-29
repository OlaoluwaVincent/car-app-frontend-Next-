import axios, { AxiosError } from 'axios';
import NextAuth, { NextAuthOptions, Session, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

type UserResponse = {
  token: string;
  id: string;
  email: string;
  name: string;
  role: string;
  profileImg: string;
  billingId: string | null;
  image: string;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentails',

      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        try {
          const response = await axios.post(
            'http://localhost:9000/api/auth/login',
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );
          if (response) {
            const user: UserResponse = {
              ...response.data,
            };
            return user;
          }
          return null;
        } catch (error: any) {
          throw new Error(JSON.stringify(error.response.data));
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/login',
  },

  callbacks: {
    async jwt({ token, user }) {
      const u = user as UserResponse;
      if (user) {
        token = { ...token, accessToken: u.token, role: u.role };
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
