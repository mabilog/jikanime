"use client";

import { useRouter } from "next/navigation";
// import Search from "./component/search";

export default function Home() {
  const router = useRouter();
  const categories = [
    { value: "all", label: "All" },
    { value: "animes", label: "Animes" },
    { value: "characters", label: "Characters" },
    { value: "voice_actors", label: "Voice Actors" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;
    const category = formData.get("category") as string;

    router.push(`/search?query=${query}&category=${category}`);
  };
  return (
    <main className="">
      <div
        className="flex flex-col justify-center items-center h-full
      "
      >
        <h1>Jikanime</h1>
        {/* <Search searchParams={searchParams} /> */}
        <form onSubmit={handleSubmit}>
          <select name="category" defaultValue="all">
            {categories.map((cat) => (
              <option value={cat.value} key={cat.label}>
                {cat.label}
              </option>
            ))}
          </select>
          <input type="text" name="query" placeholder="God kill me now" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
