import Link from "next/link";
import SearchSmall from "./SearchSmall";

export default function Navbar() {
  return (
    <header className="flex flex-row justify-center items-center h-full">
      <Link
        href="/"
        className="py-1 px-2 bg-purple-500 text-white hover:bg-purple-900 duration-300 ease"
      >
        Jikanime
      </Link>
      <SearchSmall />
    </header>
  );
}
