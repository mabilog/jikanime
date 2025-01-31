import { fetchAnimeById } from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ id: number }> }) {
  const { id } = await props.params;

  const { background, synopsis } = await fetchAnimeById(id);

  return (
    <div className="flex flex-col">
      <div>
        <h3>Synopsis</h3>
        <p>{synopsis}</p>
      </div>
      <div>
        <h3>Background</h3>
        <p>{background}</p>
      </div>
    </div>
  );
}
