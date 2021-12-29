export interface IWatchedMovie {
  title: string;
  id: number;
  isWatched: boolean;
  /** 評論 */
  comment?: string;
  /** 觀影日期 */
  watchedDate?: Date;
}

export const enum WATCHLIST_TYPE {
  NEW = 'new',
  READ = 'read'
}
