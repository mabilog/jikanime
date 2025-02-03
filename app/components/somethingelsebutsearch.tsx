import SearchBar from "./SearchBar";
import SearchResults from "./searchResults";
import { Suspense } from "react";

export default async function Search({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  return (
    <>
      <SearchBar placeholder="Search for anime" />
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </>
  );
}
