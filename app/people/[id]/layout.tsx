import { notFound } from "next/navigation";
import { fetchPeopleById } from "@/app/lib/data";
import { People } from "@/app/lib/definitions";
import SideInfo from "@/app/ui/people/sideInfo";
import Navigation from "@/app/ui/anime/animeNav";
import PeopleNav from "@/app/ui/people/PeopleNav";

type LayoutProps = {
  params: Promise<{ id: number }>;
  children: React.ReactNode;
};

export default async function Layout({ params, children }: LayoutProps) {
  const { id } = await params;
  const person: People = await fetchPeopleById(id);

  if (!person) {
    notFound();
  }

  return (
    <div className="flex h-screen flex-col max-w-screen-xl mx-auto">
      <div>
        <h1>{person.name}</h1>
      </div>
      <div className="flex flex-row gap-4">
        <SideInfo person={person} />
        <div className="flex flex-col mb-4 w-full gap-2">
          <PeopleNav id={person.mal_id} data={person.voices} />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
