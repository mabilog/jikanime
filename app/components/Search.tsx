"use client";

import { useRouter } from "next/navigation";
import {
  fetchActorsByQuery,
  fetchCharactersByQuery,
  fetchSearchAnime,
} from "../lib/data";

export default function Search({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const router = useRouter();

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("query") as string;
    const category = formData.get("category") as string;

    let results;

    switch (category) {
      case "anime":
        results = await fetchSearchAnime(query);
        break;
      case "character":
        results = await fetchCharactersByQuery(query);
        break;
      case "voice_actor":
        results = await fetchActorsByQuery(query);
        break;
      case "all":
        const [animeResults, characterResults, actorResults] =
          await Promise.all([
            fetchSearchAnime(query),
            fetchCharactersByQuery(query),
            fetchActorsByQuery(query),
          ]);

        results = {
          anime: animeResults,
          character: characterResults,
          voice_actor: actorResults,
        };

      default:
        results = null;
    }

    router.push(
      `/search?query=${encodeURIComponent(query)}&category=${encodeURIComponent(
        category
      )}&results=${encodeURIComponent(JSON.stringify(results))}`
    );
  };

  return (
    <form onSubmit={handleSearch}>
      <select name="category" defaultValue={searchParams?.query ? "anime" : ""}>
        <option value="anime">Anime</option>
        <option value="character">Character</option>
        <option value="voice_actor">Voice Actor</option>
      </select>
      <input
        type="text"
        name="query"
        defaultValue={searchParams?.query || ""}
        placeholder="Search"
      />
      <button type="submit">Search</button>
    </form>
  );
}
