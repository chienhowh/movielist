export interface IWatchedMovie {
  title: string;
  id: number;
  beenWatched: boolean;
  comment: string;
  watchedDate: Date;
}

export const enum WATCHLIST_TYPE {
  NEW = 'new',
  READ = 'read'
}
