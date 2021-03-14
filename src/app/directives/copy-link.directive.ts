import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[sCopyLink]'
})
export class CopyLinkDirective {

  @HostBinding('class.link-copied') linkCopied : boolean = false;

  @HostListener('click')
  CopyLink(){
    this.linkCopied = true;
  }


}
