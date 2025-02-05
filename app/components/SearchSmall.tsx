"use client";
import { useSearchContext } from "../context/useSearchContext";

export default function SearchSmall() {
  const { searchQuery, handleSubmit } = useSearchContext();
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        placeholder="Search for anime!"
        defaultValue={searchQuery}
      />
      {/* <button type="submit">Submit</button> */}
    </form>
  );
}
