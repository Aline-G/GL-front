import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[numbersOnly]'
})
export class OnlyNumberDirective {
  /*
    constructor(private _el: ElementRef) {
    }

    // @ts-ignore
    @HostListener('input', ['$event']) onInputChange(event) {
      const initalValue = this._el.nativeElement.value;

      this._el.nativeElement.value = initalValue.replace(/[^0-9]*!/g, '');
      if (initalValue !== this._el.nativeElement.value) {
        event.stopPropagation();
      }
    }*/

  private regex: RegExp = new RegExp(/^\d*\,?\d{0,2}$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
  constructor(private el: ElementRef) { }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();

    }
  }
}
