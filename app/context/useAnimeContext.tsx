"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Anime, Character } from "../lib/definitions";

type AnimeContextType = {
  anime: Anime | null;
  characters: Character[] | null;
  setAnime: Dispatch<SetStateAction<Anime | null>>;
  setCharacters: Dispatch<SetStateAction<Character[] | null>>;
};

export const AnimeContext = createContext<AnimeContextType | null>(null);

export function AnimeProvider({
  children,
  initialAnime = null,
  initialCharacters = [],
}: {
  children: ReactNode;
  initialAnime?: Anime | null;
  initialCharacters?: Character[] | null;
}) {
  const [anime, setAnime] = useState<Anime | null>(initialAnime);
  const [characters, setCharacters] = useState<Character[] | null>(
    initialCharacters
  );

  return (
    <AnimeContext.Provider
      value={{ anime, characters, setAnime, setCharacters }}
    >
      {children}
    </AnimeContext.Provider>
  );
}

export const useAnimeContext = () => {
  const context = useContext(AnimeContext);

  if (!context) {
    throw new Error(
      "useAnimeContext must be used within an AnimeContextProvider"
    );
  }

  return context;
};
