"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";

export default function NavSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const initial = searchParams.get("search") ?? "";

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    value ? params.set("search", value) : params.delete("search");
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <Input
      key={initial}
      type="search"
      placeholder="search"
      defaultValue={initial}
      onChange={(e) => handleSearch(e.target.value)}
      className="max-w-xs"
    />
  );
}
