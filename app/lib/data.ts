export async function fetchSeasonNow(limit: number, page: number) {
  try {
    const { data } = await fetch(
      `https://api.jikan.moe/v4/seasons/now?limit=${limit}&page=${page}`
    ).then((res) => res.json());

    return data;
  } catch (error) {
    console.error("Jikan API call Error: ", error);
    throw new Error("Failed to fetch current season");
  }
}

export async function fetchAnimeById(id: number) {
  try {
    const { data } = await fetch(`https://api.jikan.moe/v4/anime/${id}`).then(
      (res) => res.json()
    );
    return data;
  } catch (error) {
    console.error("Jikan API call Error: ", error);
    throw new Error("Failed to fetch anime by id");
  }
}

export async function fetchAnimeCharacters(id: number) {
  try {
    const { data } = await fetch(
      `https://api.jikan.moe/v4/anime/${id}/characters`
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.error("Jikan API call Error: ", error);
    throw new Error("Failed to fetch anime by id");
  }
}
