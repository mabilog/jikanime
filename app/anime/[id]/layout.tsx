import { notFound } from "next/navigation";
import { fetchAnimeById } from "@/app/lib/data";
import { Anime as AnimeType } from "@/app/lib/definitions";
import SideInfo from "@/app/ui/anime/sideInfo";
import Navigation from "@/app/ui/anime/animeNav";

type LayoutProps = {
  params: Promise<{ id: number }>;
  children: React.ReactNode;
};

export default async function Layout({ params, children }: LayoutProps) {
  const { id } = await params;
  const anime: AnimeType = await fetchAnimeById(id);

  if (!anime) {
    notFound();
  }

  return (
    <div className="flex h-screen flex-col max-w-screen-xl mx-auto">
      <div>
        <h1>{anime.title}</h1>
        <h2>{anime.title_english}</h2>
      </div>
      <div className="flex flex-row gap-4">
        <SideInfo anime={anime} />
        <div className="flex flex-col mb-4 w-full gap-2">
          <Navigation id={anime.mal_id} />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
