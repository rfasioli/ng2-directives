import { Directive, HostListener, HostBinding, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = "yellow";
    // this.renderer.setElementStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "yellow");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = "white";
    // this.renderer.setElementStyle(
    //   this.elementRef.nativeElement,
    //   "background-color", "white");
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  // @HostBinding('style.backgroundColor') get setColor() {
  //   //para colocar código extra
  //   return this.backgroundColor;
  // }
  // private backgroundColor: string;

  constructor(
    // private elementRef: ElementRef,
    // private renderer: Renderer
  ) { }

}
