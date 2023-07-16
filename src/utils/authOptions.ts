import { NextAuthOptions } from "next-auth";

import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize(credentials, req) {
        // Perform database operations

        console.log({ REST: credentials });
        if (
          credentials?.email == "jose@gmail.com" &&
          credentials.password == "123"
        ) {
          return {
            id: "1",
            email: "jose@gmail.com",
          };
        }

        console.log({ credentials });
        return null;
      },
    }),
  ],
};
