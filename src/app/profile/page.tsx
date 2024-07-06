"use client";

import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You are not authenticated.</div>;
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Sign Out
      </button>
    </div>
  );
}
