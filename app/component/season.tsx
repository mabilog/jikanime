import { fetchSeasonNow } from "../lib/data";
import { Cards } from "../ui/anime/cards";

export default async function Season() {
  const limit = 10;
  const page = 1;
  const season = await fetchSeasonNow(limit, page);

  return <Cards animes={season} />;
}
