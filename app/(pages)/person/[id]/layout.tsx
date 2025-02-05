import { fetchPeopleById, fetchPersonVoices } from "@/app/lib/data";
import { PersonProvider } from "@/app/context/usePeopleContext";
import { ReactNode } from "react";
import { notFound } from "next/navigation";

type LayoutProps = {
  params: Promise<{ id: number }>;
  children: ReactNode;
};

export default async function Layout({ params, children }: LayoutProps) {
  const { id } = await params;
  const [person, voices] = await Promise.all([
    fetchPeopleById(id),
    fetchPersonVoices(id),
  ]);

  if (!person) {
    notFound();
  }

  return (
    <PersonProvider initialPerson={person} initialVoices={voices}>
      {children}
    </PersonProvider>
  );
}
