export const API = {
  POST: 'post',
  GET: 'get',
  GET_BY_ID: 'getbyid',
  DELETE: 'delete',
  PATCH: 'patch',
  PUT: 'put',
  KEY: 'bc0a486e34f46f2e1df814d9d7d35008',
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
  RECOMMENDATIONS: '/recommendations',
  PERSON: '/person',
  // DB start
  WATCHLIST: '/watchlist',
  FAVORITE: '/favorite',
  ADDLIST: '/customlist',
  /** 已經觀看 */
  BEENWATCHED: '/watched',
  POSTER: 'https://image.tmdb.org/t/p/'
};

export enum API_POSTER {
  GET_POSTER = 'https://image.tmdb.org/t/p/w220_and_h330_face',
  GET_POSTER_BG = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces',
  GET_PERSON_1X = 'https://image.tmdb.org/t/p/w138_and_h175_face/',
  GET_PERSON_2X = 'https://image.tmdb.org/t/p/w276_and_h350_face/',
  GET_RECOMMEND_1X = 'https://image.tmdb.org/t/p/w250_and_h141_face/',
  GET_RECOMMEND_2X = 'https://image.tmdb.org/t/p/w500_and_h282_face/'
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
