import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivaalumno]'
})
export class DirectivaalumnoDirective {

  constructor(
    element : ElementRef,
    renderizado: Renderer2
  ) {
    renderizado.setStyle(element.nativeElement,'fontSize','30px');
    renderizado.setStyle(element.nativeElement,'color','red');
  }

}
