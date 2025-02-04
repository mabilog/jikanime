import { fetchPeopleById } from "@/app/lib/data";
import { PersonProvider } from "@/app/context/usePeopleContext";
import { ReactNode } from "react";
import { notFound } from "next/navigation";

type LayoutProps = {
  params: Promise<{ id: number }>;
  children: ReactNode;
};

export default async function Layout({ params, children }: LayoutProps) {
  const { id } = await params;
  const person = await fetchPeopleById(id);

  if (!person) {
    notFound();
  }

  return <PersonProvider initialPerson={person}>{children}</PersonProvider>;
}
