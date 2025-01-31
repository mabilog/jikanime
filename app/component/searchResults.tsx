import { SearchAll } from "../lib/definitions";

export default async function SearchResults(props: { results: SearchAll }) {
  const { results } = props;

  console.log("results: ", results);

  return <p>What up everyone</p>;
}
