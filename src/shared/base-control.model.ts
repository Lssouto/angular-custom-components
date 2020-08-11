import { HostBinding, Injectable, ContentChild, Input, Component } from '@angular/core';
import { NgControl } from '@angular/forms';
import { makeModifiers, addModifiers } from './component.utils';
import { ControlAcessor } from './control-acessor.model';

@Component({
    template: ''
})
export class BaseControl {
    name: string;
    component: any;
    
    @HostBinding('class') get classModifier() {
        const componentModifiers = (this.component && this.component.modifiers) || [];
        return makeModifiers([
        ...this._modifiers,
        ...componentModifiers
        ], this.name);
    }

    private _modifiers: string[] = [];
    @Input() set modifiers(value) {
        this._modifiers = addModifiers(this._modifiers, value);
    }
        
    protected _control: NgControl;
    get control() { return this._control; }

    constructor() {}

}

@Component({ template: '' })
export class BaseControlAcessor extends ControlAcessor {
    name: string;
    component: any;
    
    @HostBinding('class') get classModifier() {
        const componentModifiers = (this.component && this.component.modifiers) || [];
        return makeModifiers([
        ...this._modifiers,
        ...componentModifiers
        ], this.name);
    }

    private _modifiers: string[] = [];
    @Input() set modifiers(value) {
        this._modifiers = addModifiers(this._modifiers, value);
    }
        
    protected _control: NgControl;
    get control() { return this._control; }

    constructor() {
        super();
    }
}