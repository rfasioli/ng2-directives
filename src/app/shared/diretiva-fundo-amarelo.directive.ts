import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[appDiretivaFundoAmarelo]'
})
export class DiretivaFundoAmareloDirective {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer) {
    //Evitar elementRef, preferir o renderer
    // console.log(this.elementRef);
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';

    this.renderer.setElementStyle(
          this.elementRef.nativeElement,
          "background-color",
          "yellow");
  }

}
