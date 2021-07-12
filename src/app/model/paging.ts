
export class Paging {
  /** which page */
  pageIndex: number;
  pageSize: number;
  totalResults = 0;
  //
  beenSearched = false;
  constructor(pageIndex: number = 1, pageSize: number = 20) {
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
  }

  initialize() {
    this.pageIndex = 1;
  }


  get totalPages(): number {
    return Math.ceil(this.totalResults / this.pageSize);
  }
}
