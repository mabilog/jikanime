"use client";

import { useRouter } from "next/navigation";
import { useSearchContext } from "./context/useSearchContext";
// import Search from "./component/search";

export default function Home() {
  const router = useRouter();
  // const { query, setQuery } = useSearchContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;

    router.push(`/search?query=${query}`);
  };
  return (
    <main className="">
      <div
        className="flex flex-col justify-center items-center h-full
      "
      >
        <h1>Jikanime</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="query" placeholder="God kill me now" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
