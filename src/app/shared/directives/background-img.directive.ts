import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { API } from '../../core/consts/global-constants.const';
@Directive({
  selector: '[appBackgroundImg]'
})
export class BackgroundImgDirective {
  @Input() imgWidth = 138;
  @Input() imgHeight = 175;
  @Input() posterPath = '';
  get API() {
    return API;
  }
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    // 'https://image.tmdb.org/t/p/w138_and_h175_face/'
    this.renderer.setAttribute(this.el.nativeElement, 'src', `${this.API.POSTER}w${this.imgWidth}_and_h${this.imgHeight}_face${this.posterPath}`);
    this.renderer.setAttribute(this.el.nativeElement, 'srcset', `${this.API.POSTER}w${this.imgWidth}_and_h${this.imgHeight}_face${this.posterPath} 1x, ${this.API.POSTER}w${this.imgWidth*2}_and_h${this.imgHeight*2}_face${this.posterPath} 2x`);
  }
}
