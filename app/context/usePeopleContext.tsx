"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { People, Voices } from "../lib/definitions";

type PersonContextType = {
  person: People | null;
  voices: Voices[] | null;
  setPerson: Dispatch<SetStateAction<People | null>>;
  setVoices: Dispatch<SetStateAction<Voices[] | null>>;
};

export const PersonContext = createContext<PersonContextType | null>(null);

export function PersonProvider({
  children,
  initialPerson = null,
  initialVoices = [],
}: {
  children: ReactNode;
  initialPerson?: People | null;
  initialVoices?: Voices[] | null;
}) {
  const [person, setPerson] = useState<People | null>(initialPerson);
  const [voices, setVoices] = useState<Voices[] | null>(initialVoices);

  return (
    <PersonContext.Provider value={{ person, voices, setPerson, setVoices }}>
      {children}
    </PersonContext.Provider>
  );
}

export const usePersonContext = () => {
  const context = useContext(PersonContext);

  if (!context) {
    throw new Error(
      "usePersonContext must be used within a PersonContextProvider"
    );
  }
  return context;
};
