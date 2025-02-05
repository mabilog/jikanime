import { notFound } from "next/navigation";
import { fetchAnimeById, fetchAnimeCharacters } from "@/app/lib/data";
import { ReactNode } from "react";
import { AnimeProvider } from "@/app/context/useAnimeContext";
import AnimeTitle from "@/app/ui/anime/AnimeTitle";
import AnimeSideInfo from "@/app/ui/anime/AnimeSideInfo";
import AnimeNav from "@/app/ui/anime/AnimeNav";

type LayoutProps = {
  params: Promise<{ id: number }>;
  children: ReactNode;
};

export default async function Layout({ params, children }: LayoutProps) {
  const { id } = await params;

  const [anime, characters] = await Promise.all([
    fetchAnimeById(id),
    fetchAnimeCharacters(id),
  ]);

  if (!anime) {
    notFound();
  }

  return (
    <AnimeProvider initialAnime={anime} initialCharacters={characters}>
      <div className="flex h-screen flex-col max-w-screen-xl mx-auto">
        <AnimeTitle />
        <div className="flex flex-col md:flex-row gap-4">
          <AnimeSideInfo />
          <div className="flex flex-col mb-4 w-full gap-2">
            <AnimeNav id={id} />
            <div>{children}</div>
          </div>
        </div>
      </div>
    </AnimeProvider>
  );
}
