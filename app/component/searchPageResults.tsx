"use client";
import { useEffect, useState } from "react";

export default function SearchPageResults({
  searchParams,
}: {
  searchParams?: { query?: string; category?: string; results?: string };
}) {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (searchParams?.results) {
      const parsedResults = JSON.parse(
        decodeURIComponent(searchParams.results)
      );
      setResults(parsedResults);
      setLoading(false);
      console.log(parsedResults);
    }
  }, [searchParams]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <div>{results ? <>someone is here</> : <p>Something</p>}</div>;
}
