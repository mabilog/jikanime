import { Anime as AnimeType } from "@/app/lib/definitions";

export default function Alternative({ anime }: { anime: AnimeType }) {
  return (
    <div>
      <h3>Alternative Title</h3>
      <div>
        <p>
          Synonyms:{" "}
          {anime.title_synonyms.map((title, index) => (
            <span key={index}>
              {title}
              {index < anime.title_synonyms.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <p>Japanese: {anime.title_japanese}</p>
        <p>English: {anime.title_english}</p>
      </div>
    </div>
  );
}
