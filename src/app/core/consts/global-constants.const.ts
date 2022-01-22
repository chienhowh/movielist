export const API = {
  POST: 'post',
  GET: 'get',
  GET_BY_ID: 'getbyid',
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


  // DB start
  WATCHLIST: '/watchlist',
  FAVORITE: '/favorite',
  ADDLIST: '/customlist',
  /** 已經觀看 */
  BEENWATCHED: '/watched'
};

export enum API_POSTER {
  GET_POSTER = 'https://image.tmdb.org/t/p/w200'
}


export const COMMON = {
  UID: 'uid',
  USER: 'movie-user'
};


export const FIRE_STORE_COLLECTIONS = {
  /** 客製名單 */
  CUSTOMLIST: 'customlist',
  /** 待播清單 */
  WATCHLIST: 'watchlist',
  /** 我的最愛 */
  FAVORITELIST: 'favorite',
  MOVIES: 'movies',

}

export const FIRE_BASE_AUTH_METHOD = {
  SIGNUP: 'signUp',
  SIGNIN: 'signInWithPassword'
}
