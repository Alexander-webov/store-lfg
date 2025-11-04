import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { links } from "../../app/utils/links";
import UserIcon from "./UserIcon";
import { SignedOut, SignedIn, SignInButton, SignUpButton } from "@clerk/nextjs";
import SignOutLink from "./SignOutLink";
import { auth } from "@clerk/nextjs/server";

async function LinksDropdown() {
  const { userId } = await auth();

  const isAdmin = userId === process.env.ADMIN_USER_ID;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40">
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </SignedOut>

        <SignedIn>
          {links.map((link) => {
            if (link.label === "dashboard" && !isAdmin) return null;
            return (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className="capitalize w-full">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
