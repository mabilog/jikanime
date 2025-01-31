import SearchBar from "./searchBar";

export default function NewSearch({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  return <SearchBar placeholder="Please god kill me" />;
}
