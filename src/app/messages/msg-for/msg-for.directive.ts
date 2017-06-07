import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[msgFor]'
})
export class MsgForDirective {
  @Input() set msgForOf(messages) {
    console.log(messages);
    if(messages && messages.length) {
      messages.forEach((message) => {
        this.view.createEmbeddedView(this.template, {
          $implicit: message
        });
      })
    }
  }

  constructor(el:ElementRef, private view:ViewContainerRef, private template:TemplateRef<any>) {
    /*console.log(el.nativeElement);*/
  }

}
