import { useAnimeContext } from "@/app/context/useAnimeContext";

const infoStyle = "flex flex-col";
const textStyle = "text-nowrap";

export default function Information() {
  const { anime } = useAnimeContext();

  if (!anime) return <div>No anime data available.</div>;

  const renderList = (label: string, items: { name: string }[]) => (
    <div className={infoStyle}>
      <div>{label}:</div>
      <div className={textStyle}>
        {items.length > 0
          ? items.map((item, index) => (
              <span key={index}>
                {item.name}
                {index < items.length - 1 ? ", " : ""}
              </span>
            ))
          : "Unknown"}
      </div>
    </div>
  );

  const renderStat = (label: string, value: string | number) => (
    <div className={infoStyle}>
      <div>{label}:</div>
      <div className={textStyle}>{value}</div>
    </div>
  );

  return (
    <div className="flex">
      <h3 className="hidden md:block">Information</h3>
      <div className="flex gap-3">
        {[
          { label: "Format", value: anime.type },
          {
            label: "Episodes",
            value: anime.episodes !== null ? anime.episodes : "Unknown",
          },
          { label: "Aired", value: anime.aired.string },
          { label: "Premiered", value: `${anime.season} ${anime.year}` },
          { label: "Broadcast", value: anime.broadcast.string },
          { label: "Source", value: anime.source },
          { label: "Duration", value: anime.duration },
          { label: "Rating", value: anime.rating },
        ].map(({ label, value }) => renderStat(label, value))}
        {renderList("Producers", anime.producers)}
        {renderList("Licensors", anime.licensors)}
        {renderList("Studios", anime.studios)}
        {renderList("Genre", anime.genres)}
        {renderList("Themes", anime.themes)}
      </div>
      <div>
        <h3>Statistics</h3>
        <div className="flex gap-3">
          {[
            { label: "Score", value: anime.score },
            { label: "Ranked", value: anime.rank },
            { label: "Popularity", value: anime.popularity },
            { label: "Members", value: anime.members },
            { label: "Favorites", value: anime.favorites },
          ].map(({ label, value }) => renderStat(label, value))}
        </div>
      </div>
    </div>
  );
}
