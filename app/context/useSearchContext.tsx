import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Context,
} from "react";

interface SearchContextProps {
  query: string;
  setQuery: (query: string) => void;
}

export const SearchContextValue = createContext<SearchContextProps | undefined>(
  undefined
);

export function useSearchContext() {
  const context = useContext(SearchContextValue);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}

export const SearchContext = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState("");
  return (
    // <SearchContextValue.Provider value={{ query, setQuery }}>
    { children }
    // </SearchContextValue.Provider>
  );
};
