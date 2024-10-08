"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function SignOut() {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };
  return <button onClick={handleSignOut}>SignOut</button>;
}
