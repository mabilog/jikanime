import { Anime as AnimeType } from "@/app/lib/definitions";

export default function Stats({ anime }: { anime: AnimeType }) {
  return (
    <div>
      <h3>Statistics</h3>
      <div>
        <p>Score: {anime.score}</p>
        <p>Ranked: {anime.rank}</p>
        <p>Popularity: {anime.popularity}</p>
        <p>Members: {anime.members}</p>
        <p>Favorites: {anime.favorites}</p>
      </div>
    </div>
  );
}
