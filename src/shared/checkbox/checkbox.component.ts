import { Component,
  ChangeDetectionStrategy,
  Directive,
  AfterViewInit,
  ContentChild,
  ChangeDetectorRef,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from '../base-control.model';

@Directive({
  selector: '[checkbox]'
})
export class CheckboxDirective {
  @HostListener('focus') onFocus() { this.modifiers.push('focus'); }
  @HostListener('blur') onBlur() { this.modifiers = this.modifiers.filter(modifier => modifier !== 'focus') }

  public modifiers: string[] = [];

  constructor(public ngControl: NgControl) {}
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent extends BaseControl implements AfterViewInit {

  name = 'checkbox';

  @ContentChild(CheckboxDirective, { static: false }) component: CheckboxDirective;

  ngAfterViewInit() {
    setTimeout(() => {
      this._control = this.component.ngControl;
    })
  }

  constructor(public cdRef: ChangeDetectorRef) {
    super();
  }

}
