"use client";

import React from "react";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession({ required: true });

  if (status === "loading")
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="flex h-screen items-center justify-center">
      This is a protected page on client
    </div>
  );
}
