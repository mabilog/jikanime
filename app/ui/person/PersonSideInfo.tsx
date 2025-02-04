import { usePersonContext } from "@/app/context/usePeopleContext";
import Image from "next/image";

export default function PersonSideInfo() {
  const { person } = usePersonContext();

  if (!person) {
    return <div>PersonSideInfo Loading...</div>;
  }

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
