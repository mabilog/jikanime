import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex flex-row gap-2">
      <Link
        href="/"
        className="py-1 px-2 bg-purple-500 text-white hover:bg-purple-900 duration-300 ease"
      >
        Jikan
      </Link>

      <form action="">
        <select>
          <option value="all">All</option>
          <option value="anime">Anime</option>
          <option value="character">Character</option>
          <option value="voice">Voice Actor</option>
        </select>
      </form>
      <input type="text" />
    </header>
  );
}
