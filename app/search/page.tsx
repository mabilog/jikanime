import SearchResults from "../component/searchResults";
import {
  fetchActorsByQuery,
  fetchCharactersByQuery,
  fetchSearchAnime,
} from "../lib/data";
import { SearchAll } from "../lib/definitions";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { query?: string; category?: string };
}) {
  const query = searchParams?.query || "";
  const category = searchParams?.category || "all";

  let results: SearchAll;

  switch (category) {
    case "anime":
      const aRes = await fetchSearchAnime(query);
      results = { animes: aRes, characters: null, actors: null };
      break;
    case "character":
      const cRes = await fetchCharactersByQuery(query);
      results = { animes: null, characters: cRes, actors: null };

      break;
    case "voice_actor":
      const vRes = await fetchActorsByQuery(query);
      results = { animes: null, characters: null, actors: vRes };
      break;
    case "all":
      const [actorsResults, animesResults, charactersResults] =
        await Promise.all([
          fetchActorsByQuery(query),
          fetchSearchAnime(query),
          fetchCharactersByQuery(query),
        ]);

      results = {
        actors: actorsResults,
        animes: animesResults,
        characters: charactersResults,
      };
      break;
    default:
      results = { actors: null, animes: null, characters: null };
  }
  return (
    <main>
      <h1>Search Results</h1>
      <SearchResults results={results} />
    </main>
  );
}
