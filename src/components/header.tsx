import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex bg-black text-white pd-3 gap-5 h-10 fixed w-full">
      <Link href="/" className="text-yellow-400 ">
        Home
      </Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/dashboard/settings/user">User</Link>
      <Link href="/dashboard/settings">Settings</Link>
    </div>
  );
}
