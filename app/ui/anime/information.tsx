import { Anime as AnimeType } from "@/app/lib/definitions";

export default function Information({ anime }: { anime: AnimeType }) {
  return (
    <div>
      <h3>Information</h3>
      <div>
        <p>
          Type: <span>{anime.type}</span>
        </p>
        <p>
          Episodes: <span>{anime.episodes}</span>
        </p>
        <p>
          Aired: <span>{anime.aired.string}</span>
        </p>
        <p>
          Premiered:{" "}
          <span>
            {anime.season} {anime.year}
          </span>
        </p>
        <p>
          Broadcast: <span>{anime.broadcast.string}</span>
        </p>
        <p>
          Producers:{" "}
          {anime.producers.map((producer, index) => (
            <span key={producer.name}>
              {producer.name}
              {index < anime.producers.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <p>
          Licensors:{" "}
          {anime.licensors.map((licensor, index) => (
            <span key={licensor.name}>
              {licensor.name}
              {index < anime.licensors.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <p>
          Studios:{" "}
          {anime.studios.map((studio, index) => (
            <span key={studio.name}>
              {studio.name}
              {index < anime.studios.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <p>
          Sources: <span>{anime.source}</span>
        </p>
        <p>
          Genre:{" "}
          {anime.genres.map((genre, index) => (
            <span key={genre.name}>
              {genre.name}
              {index < anime.genres.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <p>
          Themes:{" "}
          {anime.themes.map((theme, index) => (
            <span key={theme.name}>
              {theme.name}
              {index < anime.themes.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <p>
          Duration: <span>{anime.duration}</span>
        </p>
        <p>
          Rating: <span>{anime.rating}</span>
        </p>
      </div>
    </div>
  );
}
