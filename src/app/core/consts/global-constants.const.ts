export const API = {
  POST: 'post',
  GET: 'get',
  DELETE: 'delete',
  PATCH: 'patch',
  PUT: 'put',
  KEY: '?api_key=bc0a486e34f46f2e1df814d9d7d35008',
  /** TMDB start */
  MOVIE: '/movie',
  // 關鍵字搜尋
  SEARCH_MOVIE: '/search/movie',
  /** 按類搜索 */
  DISCOVER: '/discover/movie',

  // 分類列表
  GENRE_LIST: '/genre/movie/list',

  POPULAR: '/movie/popular',
  UPCOMING: '/movie/upcoming',
  TOP_RATED: '/movie/top_rated',
  NOW_PLAYING: '/movie/now_playing',
  GET_BY_ID: '/movie',

  // DB start
  WATCHLIST: '/watchlist',
  FAVORITE: '/favorite',
  ADDLIST: '/customlist',
  /** 已經觀看 */
  BEENWATCHED: '/watched'
}

export enum API_POSTER {
  GET_POSTER = 'https://image.tmdb.org/t/p/w200'
}
