import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`/${pathname}?${params.toString()}`);
  }, 300);

  return (
    <>
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
    </>
  );
}
