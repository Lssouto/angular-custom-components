import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ContentChildren, AfterViewInit, QueryList, Directive, HostListener, EventEmitter, Input, OnDestroy, ChangeDetectorRef, forwardRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ControlAcessor } from '../control-acessor.model';
import { BaseControlAcessor } from '../base-control.model';

@Directive({
  selector: '[select-option]'
})
export class SelectOptionDirective implements AfterViewInit {

  public parent: SelectComponent;
  
  @Input() value: any;

  @Input() checked: any
  
  @HostListener('click') clickEvent() {
    this._changeSelectValue();
  }

  private _changeSelectValue() {
    this.parent.value = this.value;
    this.parent.collapsed = true;
    this.parent.cdRef.detectChanges();
  }

  ngAfterViewInit() {  
    if(this.checked !== undefined) {
      setTimeout(() => {
        this._changeSelectValue();
      })
    }
  }
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent extends BaseControlAcessor implements AfterViewInit, OnDestroy, ControlValueAccessor {
  
  name = 'select';
  
  public collapsed = true;

  private _optionsSubscription = new Subscription();

  @ContentChildren(SelectOptionDirective) options: QueryList<SelectOptionDirective>;

  ngAfterViewInit() {
    this._optionsSubscription.add(
      this.options.changes.subscribe(() => {
        this._createEventBind();
      })
    )
    this._createEventBind();
  }
  
  private _createEventBind() {
    this.options.toArray().forEach(option => {
      option.parent = this;
    })
  }
  
  
  ngOnDestroy() {
    this._optionsSubscription.unsubscribe();
  }
  
  constructor(public cdRef: ChangeDetectorRef) {
    super();
  }
  
}
