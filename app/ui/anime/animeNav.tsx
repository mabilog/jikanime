"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ id }: { id: number }) {
  const pathname = usePathname();
  const links = [
    {
      name: "Info",
      href: `/anime/${id}`,
    },
    {
      name: "Characters",
      href: `/anime/${id}/characters`,
    },
  ];
  return (
    <div className="flex flex-row gap-4">
      {links.map((link) => (
        <Link
          href={link.href}
          className={clsx("py-1 px-2 border", {
            "bg-sky-100 text-vlue-600": pathname === link.href,
          })}
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
