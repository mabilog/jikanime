"use client";

import { usePersonContext } from "@/app/context/usePeopleContext";
import PersonNav from "@/app/ui/person/PersonNav";
import PersonSideInfo from "@/app/ui/person/PersonSideInfo";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  const { person } = usePersonContext();

  if (!person) {
    notFound();
  }

  return (
    <div className="flex h-screen flex-col max-w-screen-xl mx-auto">
      <div>
        <h1>{person.name}</h1>
      </div>
      <div className="flex flex-row gap-4">
        <PersonSideInfo />
        <div className="flex flex-col mb-4 w-full gap-2">
          <PersonNav id={person.mal_id} data={person.voices} />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
