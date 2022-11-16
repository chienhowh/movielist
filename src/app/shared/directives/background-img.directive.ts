import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundImg]'
})
export class BackgroundImgDirective {
  @Input() appBackgroundImg = '';
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', `url(${this.appBackgroundImg})`)
    this.renderer.setStyle(this.el.nativeElement, 'height', '400px')
  }
}
