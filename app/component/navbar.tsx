import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Jikanime", href: "/" },
    { name: "Anime", href: "/anime" },
    { name: "Character", href: "/character" },
    { name: "People", href: "/people" },
  ];

  return (
    <nav>
      {links.map((link) => (
        <Link href={link.href} key={link.name}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
