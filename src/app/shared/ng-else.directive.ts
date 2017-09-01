import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {

  @Input("ngElse") else: string;

  constructor() { }

}
