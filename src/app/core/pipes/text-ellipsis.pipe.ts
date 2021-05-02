import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textEllipsis'
})
export class TextEllipsisPipe implements PipeTransform {

  transform(value: string, length: number): unknown {
    const ellipsisLength: number = length || 200;
    if (value.length > ellipsisLength) {
      return value.substring(0, ellipsisLength - 1) + '...';
    }
    return value;
  }

}
