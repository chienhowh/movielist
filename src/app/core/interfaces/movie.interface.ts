export interface IMovieInfo {
  adult: boolean;
  backdrop_path: string;
  genres: { id: number, name: string }[];
  id: number;
  budget: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  revenue: number;
  vote_count: number;
  runtime: number;
  credits: { cast: ICast[], crew: ICrew[] }
  production_countries: { iso_3166_1: string, name: string }[]
}

export interface IPerson {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  movie_credits: { cast: IMovieInfo[], crew: IMovieInfo[] }
}



export interface ICast {
  adult: boolean;
  cast_id: number;
  character: string;
  gender: number;
  known_for_department: string;
  order: number;
  popularity: number;
  credit_id: string;
  id: number;
  name: string
  original_name: string;
  profile_path: string;
}

export interface ICrew {
  department: string;
  job: string;
  credit_id: string;
  id: number;
  name: string
  original_name: string;
  profile_path: string;
}

export interface IRecommendation {
  backdrop_path: string;
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

/** tmdb回傳格式 */
export interface IResponse {
  page: number;
  results: any;
  total_pages: number;
  total_results: number;
  dates?: { maximum: string, minimum: string };
}

export interface IGenre {
  name: string;
  id: number;
}


export interface ICustomList {
  subject: string;
  desc: string;
  id: string;
  /** movie id[] */
  collections?: number[];
  inList?: boolean;
}
