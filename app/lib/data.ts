"use server";

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

export async function fetchPeopleById(id: number) {
  try {
    const { data } = await fetch(
      `https://api.jikan.moe/v4/people/${id}/full`
    ).then((res) => res.json());

    return data;
  } catch (error) {
    console.error("Jikan API call Error: ", error);
    throw new Error("Failed to fetch people by id");
  }
}

export async function fetchPersonVoices(id: number) {
  try {
    const { data } = await fetch(
      `https://api.jikan.moe/v4/people/${id}/voices`
    ).then((res) => res.json());

    return data;
  } catch (error) {
    console.error("Jikan API call Error: ", error);
    throw new Error("Failed to fetch persons voices ");
  }
}

export async function fetchSearchAnime(query: string) {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Jikan API call Error: ", error);
    throw new Error("Failed to fetch search query");
  }
}

export async function fetchCharactersByQuery(query: string) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/characters?q=${query}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Jikan API call Error: ", error);
    throw new Error("Failed to fetch characters by query");
  }
}

export async function fetchActorsByQuery(query: string) {
  const order_by = "favorites"; // enum: "mal_id", "name", "birthday", "favorites"
  const sort = "desc"; // desc, asc
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/people?q=${query}&order_by=${order_by}&sort=${sort}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Jikan API call Error: ", error);
    throw new Error("Failed to fetch characters by query");
  }
}
