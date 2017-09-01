import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @HostListener('mouseenter') onMouseOver() { this.backgroundColor = this.highlightColor; }
  @HostListener('mouseleave') onMouseLeave() { this.backgroundColor = this.defaultColor; }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
