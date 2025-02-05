import { useAnimeContext } from "@/app/context/useAnimeContext";

export default function Alternative() {
  const { anime } = useAnimeContext();
  return (
    <div className="flex flex-col">
      <h3 className="hidden md:block">Alternative Title</h3>
      {anime ? (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div>Synonyms: </div>
            {anime.title_synonyms.map((title, index) => (
              <div key={index}>
                {title}
                {index < anime.title_synonyms.length - 1 ? ", " : ""}
              </div>
            ))}
          </div>
          <div>
            <div>Japanese:</div>
            <div>{anime.title_japanese}</div>
          </div>
          <div>
            <div>English:</div>
            <div>{anime.title_english}</div>
          </div>
        </div>
      ) : (
        <div>No anime data available.</div>
      )}
    </div>
  );
}
