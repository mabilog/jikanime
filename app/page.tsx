"use client";

import { useState } from "react";
import { fetchSearchAnime } from "./lib/data";
import { Cards } from "./ui/anime/cards";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    try {
      const data = await fetchSearchAnime(query);
      console.log(data);
      setResults(data);
    } catch (error) {
      console.error("Search Error: ", error);
    }
  };
  return (
    <main>
      <h1>Jikanime</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for an anime"
        />
      </form>
      {/* {results.length > 0 ? (
        results.map((res) => <p key={res.title}>{res.title}</p>)
      ) : (
        <></>
      )} */}
      {results.length > 0 ? <Cards animes={results} /> : <></>}
    </main>
  );
}
