import { People } from "@/app/lib/definitions";
import Image from "next/image";

export default function SideInfo({ person }: { person: People }) {
  return (
    <div className="max-w-60">
      <Image
        height={318}
        width={225}
        src={person.images.jpg.image_url}
        alt={person.name}
      />
    </div>
  );
}
