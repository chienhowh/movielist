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

export interface ICast {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface ICrew {
  credit_id: string;
  department: string;
  id: number;
  job: string;
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
