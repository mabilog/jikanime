"use client";
import { usePersonContext } from "@/app/context/usePeopleContext";
import { Voices as Voice } from "@/app/lib/definitions";
import Image from "next/image";
import { use } from "react";

export default function Characters({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const { voices } = usePersonContext();
  const resolveSearchParam = use(searchParams || Promise.resolve({})) as {
    query?: string;
  };
  const query = resolveSearchParam.query || "";

  if (!voices) return <div>No voices</div>;

  // console.log("voices: ", voices);

  return (
    <div>
      {voices.map((voice, index) => {
        const { anime, character, role } = voice;
        console.log("voice:", voice);
        return <div key={index}>{voice.anime.title}</div>;
        // return (
        //   <div
        //     className="flex flex-row border-b py-2 px-2 rounded-md bg-blue-100 "
        //     key={index}
        //   >
        //     <div className="flex flex-row w-1/2 justify-start gap-2">
        //       <Image
        //         width={50}
        //         height={100}
        //         alt={anime.anime.title}
        //         src={anime.anime.images.webp.large_image_url}
        //         className="object-contain h-fit w-auto"
        //       />
        //       <div>
        //         <p>{anime.anime.title}</p>
        //         {/* <p>{role}</p> */}
        //       </div>
        //     </div>
        //     <div className="flex flex-col w-1/2 items-end gap-2">
        //       <div className="flex gap-2 h-full justify-end" key={index}>
        //         <div className="flex flex-col gap-2 items-end">
        //           <Link
        //             href={`/person/${voice_actor.person.mal_id}`}
        //             className="transistion-colors duration-300 ease-in-out hover:text-blue-600 text-end"
        //           >
        //             {voice_actor.person.name}
        //           </Link>
        //           <span>{voice_actor.language}</span>
        //         </div>
        //         <Link
        //           href={`/person/${voice_actor.person.mal_id}`}
        //           className="h-auto "
        //         >
        //           <Image
        //             width={50}
        //             height={100}
        //             alt={voice_actor.person.name}
        //             src={voice_actor.person.images.jpg.image_url}
        //             className="object-contain w-auto"
        //           />
        //         </Link>
        //       </div>
        //     </div>
        //   </div>
        // );
      })}
    </div>
  );
}
