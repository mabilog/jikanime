import { Suspense } from "react";

import SearchResults from "@/app/components/SearchResults";
import { fetchSearchAnime } from "@/app/lib/data";
import { AnimesWithPagination } from "@/app/lib/definitions";

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
