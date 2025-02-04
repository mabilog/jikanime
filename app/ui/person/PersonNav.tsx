"use client";
import { Voices } from "@/app/lib/definitions";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PersonNav({ id, data }: { id: number; data?: Voices }) {
  const pathname = usePathname();
  const links = [
    {
      name: "Info",
      href: `/person/${id}`,
    },
    {
      name: "Characters",
      href: `/person/${id}/characters`,
    },
  ];

  if (!data) {
    return <div>no data lol</div>;
  }
  console.log("voices data", data);

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
