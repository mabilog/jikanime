"use client";
import Image from "next/image";
import Information from "@/app/ui/anime/information";

import Alternative from "@/app/ui/anime/alternative";
import { useAnimeContext } from "@/app/context/useAnimeContext";
import { notFound } from "next/navigation";

export default function AnimeSideInfo() {
  const { anime } = useAnimeContext();

  if (!anime) {
    console.log("anime is not found lmao");
    notFound();
  }

  return (
    <div className="flex flex-col overflow-auto md:block md:overflow-hidden md:max-w-60">
      <Image
        height={318}
        width={225}
        src={anime.images.webp.large_image_url}
        alt={anime.title}
        className="m-auto"
      />
      <div className="flex overflow-x-auto">
        <Information />
        <Alternative anime={anime} />
      </div>
    </div>
  );
}
