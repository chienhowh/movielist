export interface IMovieInfo {
  adult: boolean;
  backdrop_path: string;
  genres: { id: number, name: string }[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
}

export interface IResponse {
  page: number;
  results: any;
  total_pages: number;
  total_results: number;
  dates?: { maximum: string, minimum: string };
}

export interface IKeyword {
  name: string;
  id: number;
}
