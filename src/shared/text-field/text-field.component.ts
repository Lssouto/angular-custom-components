import { Component, OnInit, HostBinding, ViewEncapsulation, Directive, ContentChild, AfterViewInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControl } from '../base-control.model';

@Directive({
  selector: '[text-field]',
})
export class TextFieldDirective{
  constructor(public ngControl: NgControl) {}
}

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TextFieldComponent extends BaseControl implements AfterViewInit {
  name = 'text-field';

  @ContentChild(TextFieldDirective, { static: false }) component: TextFieldDirective;

  ngAfterViewInit() {
    this._control = this.component.ngControl;
  }

  constructor() { 
    super();
  }
}
