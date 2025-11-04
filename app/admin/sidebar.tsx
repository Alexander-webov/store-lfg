"use client";

import { usePathname } from "next/navigation";
import { adminLinks } from "../utils/links";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map((link) => {
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? "secondary" : "ghost";
        return (
          <Button
            key={link.href}
            asChild
            className="w-full mb-2 capitalize"
            variant={variant}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
