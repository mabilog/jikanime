export type Images = {
  jpg: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
};

export type Aired = {
  from: string;
  prop: {
    from: {
      day: number;
      month: number;
      year: number;
    };
    to: {
      day: number;
      month: number;
      year: number;
    };
  };
  to: string;
  string: string;
};

export type Broadcast = {
  day: string;
  string: string;
  time: string;
  timezone: string;
};

export type ExpliciteGenre = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Genre = {
  mal_id: number;
  name: string;
  type: string;
  url: string;
};

export type Licensor = {
  mal_id: number;
  name: string;
  type: string;
  url: string;
};

export type Pagination = {
  current_page: number;
  last_visible_page: number;
  has_next_page: boolean;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
};

export type Producer = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Studio = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Theme = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Titles = {
  type: string;
  title: string;
};

export type Anime = {
  aired: Aired;
  airing: boolean;
  approved: boolean;
  background: string;
  broadcast: Broadcast;
  duration: string;
  episodes: number;
  explicite_genres: ExpliciteGenre[];
  favorites: number;
  genres: Genre[];
  images: Images;
  licensors: Licensor[];
  mal_id: number;
  members: number;
  popularity: number;
  producers: Producer[];
  rank: number;
  rating: string;
  score: number;
  scored_by: number;
  season: string;
  source: string;
  status: string;
  studios: Studio[];
  synopsis: string;
  themes: Theme[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  titles: Titles[];
  trailer: {
    embed_url: string;
    images: {
      image_url: string;
      large_image_url: string;
      maximum_image_url: string;
      medium_image_url: string;
      small_image_url: string;
    };
    url: string;
    youtube_id: string;
  };
  type: string;
  url: string;
  year: number;
};

export type AnimeSmall = {
  position: string;
  anime: {
    mal_id: string;
    url: string;
    images: Images;
    title: string;
  };
};

export type Character = {
  character: CharacterSmall;
  favorites: number;
  role: string;
  voice_actors: {
    person: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
        };
      };
      name: string;
    };
    language: string;
  }[];
};

export type CharacterSmall = {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
    };
  };
  name: string;
};

export type People = {
  mal_id: number;
  url: string;
  website_url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  name: string;
  given_name: string;
  family_name: string;
  birthday: string;
  favorites: number;
  about: string;
  anime: AnimeSmall[];
  voices: Voices;
};

export type Search = {
  data: Anime[];
  pagination: Pagination;
};

export type Voices = {
  role: string;
  anime: AnimeSmall;
  character: CharacterSmall;
};

export type ActorswithPagination = {
  data: People[];
  pagination: Pagination;
};

export type AnimesWithPagination = {
  data: Anime[];
  pagination: Pagination;
};

export type CharactersWithPagination = {
  data: Character[];
  pagination: Pagination;
};

export type SearchAll = {
  actors: ActorswithPagination | null;
  animes: AnimesWithPagination | null;
  characters: CharactersWithPagination | null;
};
