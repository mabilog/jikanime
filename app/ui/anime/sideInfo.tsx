import { Anime as AnimeType } from "@/app/lib/definitions";
import Image from "next/image";
import Information from "@/app/ui/anime/information";
import Stats from "@/app/ui/anime/stats";
import Alternative from "@/app/ui/anime/alternative";

export default function SideInfo({ anime }: { anime: AnimeType }) {
  return (
    <div className="max-w-60">
      <Image
        height={318}
        width={225}
        src={anime.images.webp.large_image_url}
        alt={anime.title_english}
      />
      <Alternative anime={anime} />
      <Information anime={anime} />
      <Stats anime={anime} />
    </div>
  );
}
