import { Suspense } from "react";
import SearchResults from "../components/SearchResults";
import { fetchSearchAnime } from "../lib/data";
import { AnimesWithPagination } from "../lib/definitions";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { query?: string; category?: string };
}) {
  const query = (await searchParams?.query) || "";

  const results: AnimesWithPagination = await fetchSearchAnime(query);

  return (
    <main>
      <h1>Search Results</h1>
      <Suspense fallback={<div>Loading....</div>}>
        <SearchResults results={results} />
      </Suspense>
    </main>
  );
}
