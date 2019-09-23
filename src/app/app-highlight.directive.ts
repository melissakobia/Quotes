import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("mouseenter") onMouseEnter(){
    this.textDeco("yellow")
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.textDeco("None")
  }

  private textDeco(color:string){
    this.elem.nativeElement.style.background=color;

  }

}
