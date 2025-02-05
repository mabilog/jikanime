"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let query = formData.get("query") as string;

    query = query.trim().replace(/\s+/g, "+");

    router.push(`/search?query=${query}`);
  };
  return (
    <header className="flex flex-row justify-center items-center h-full">
      <Link
        href="/"
        className="py-1 px-2 bg-purple-500 text-white hover:bg-purple-900 duration-300 ease"
      >
        Jikanime
      </Link>

      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search for anime!" />
        <button type="submit">Submit</button>
      </form>
    </header>
  );
}
