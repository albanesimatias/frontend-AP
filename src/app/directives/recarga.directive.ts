import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRecarga]'
})
export class RecargaDirective implements OnChanges {

  @Input() appRecarga !: boolean; 
  constructor(private templeteRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
      this.viewContainerRef.createEmbeddedView(templeteRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templeteRef);
  }

}
