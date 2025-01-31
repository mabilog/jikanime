import { fetchSearchAnime } from "../lib/data";

export default async function SearchResults({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const searchParamsData = await searchParams;
  const query = searchParams?.query || "";

  let data;

  if (query) {
    data = await fetchSearchAnime(query);
    console.log("data: ", data.data);
  }

  return <h1>somethign or another</h1>;
}
