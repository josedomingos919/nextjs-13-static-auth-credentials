import React from "react";

import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/api/auth/signin");

  return (
    <div className="flex h-screen items-center justify-center">
      This is a protected page on Server
    </div>
  );
}
