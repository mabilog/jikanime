"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { People } from "../lib/definitions";

type PersonContextType = {
  person: People | null;
  setPerson: Dispatch<SetStateAction<People | null>>;
};

export const PersonContext = createContext<PersonContextType | null>(null);

export function PersonProvider({
  children,
  initialPerson = null,
}: {
  children: ReactNode;
  initialPerson?: People | null;
}) {
  const [person, setPerson] = useState<People | null>(initialPerson);

  return (
    <PersonContext.Provider value={{ person, setPerson }}>
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
