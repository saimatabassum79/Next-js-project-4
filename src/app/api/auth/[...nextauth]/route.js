import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // এখানে চেক করা হচ্ছে ইমেইল আছে কিনা এবং পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের কিনা
        if (credentials.email && credentials.password.length >= 6) {
          return {
            id: "user-" + Math.random().toString(36).substr(2, 9), // ডামি আইডি
            name: credentials.email.split('@')[0], // ইমেইলের প্রথম অংশকে নাম হিসেবে দেখাবে (যেমন: sabbir)
            email: credentials.email,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
          };
        }
        
        // যদি শর্ত পূরণ না হয় (যেমন পাসওয়ার্ড ছোট হলে)
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  secret: "any-secret-string-123",
  pages: {
    signIn: "/login", 
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };