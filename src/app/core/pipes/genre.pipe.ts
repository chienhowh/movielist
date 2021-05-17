import { Pipe, PipeTransform, OnInit } from '@angular/core';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  genreLists: [{ id: number, name: string }] = JSON.parse(sessionStorage.getItem('genres'));

  transform(genresNum: any, ...args: unknown[]): unknown {
    const genreTypes = this.genreLists.filter(genre =>
      genresNum.includes(genre.id)
    );
    return genreTypes.map(genre => genre.name);
  }

}
