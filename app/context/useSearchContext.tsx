"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createContext, ReactNode, useContext } from "react";
import { useDebouncedCallback } from "use-debounce";

type SearchContextType = {
  searchQuery: string;
  handleSearch: (term: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
export const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let query = formData.get("query") as string;

    query = query.trim().replace(/\s+/g, "+");

    router.push(`/search?query=${query}`);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery: searchParams.get("query") || "",
        handleSearch,
        handleSubmit,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }
  return context;
};
