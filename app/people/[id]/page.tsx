import { fetchPeopleById } from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ id: number }> }) {
  const { id } = await props.params;

  const data = await fetchPeopleById(id);

  return (
    <div>
      <h2></h2>
    </div>
  );
}
