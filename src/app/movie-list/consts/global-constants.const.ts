export const enum API {
  POST = 'post',
  GET = 'get',
  KEY = '?api_key=bc0a486e34f46f2e1df814d9d7d35008',

  MOVIE = '/movie',
  // 關鍵字搜尋
  SEARCH_KEYWORD = '/search/keyword',
  // 所有類型列表
  GENRE_LIST = '/genre/movie/list',

  POPULAR = '/movie/popular',
  UPCOMING = '/movie/upcoming',
  TOP_RATED = '/movie/top_rated',
  NOW_PLAYING = '/movie/now_playing'
}

export enum API_POSTER {
  GET_POSTER = 'https://image.tmdb.org/t/p/w200'
}
