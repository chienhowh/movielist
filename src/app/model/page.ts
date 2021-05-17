export class Page {
  /** which page */
  paging: number;
  /** total length */
  total_pages: number;
  total_results: number;
  constructor(paging: number = 1, length: number = 10) {
    this.paging = paging;
    this.total_results = length;
  }
}
