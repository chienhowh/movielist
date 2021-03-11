import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeURL'
})
export class SanitizeURLPipe implements PipeTransform {
  constructor(private sanitize: DomSanitizer) {

  }
  transform(url: string, args?: any): SafeUrl {

    return this.sanitize.bypassSecurityTrustUrl(`${url}`);
  }

}
