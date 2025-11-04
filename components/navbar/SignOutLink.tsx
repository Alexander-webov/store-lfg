"use client";

import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { toast } from "sonner";

function SignOutLink() {
  function handelLogout() {
    return toast.success("Logout Successful");
  }

  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handelLogout}>
        logout
      </Link>
    </SignOutButton>
  );
}

export default SignOutLink;
