export class ControlAcessor {

    public _value: any;
    get value() { return this._value; }
    set value(val: any) {
        this._value = val;
        this.onChange(val);
        this.onTouch(val);
    }

    onChange: any = () => {}
    onTouch: any = () => {}
    // this method sets the value programmatically
    writeValue(value: any){ 
        this.value = value
    }
    // upon UI element value changes, this method gets triggered
    registerOnChange(fn: any){
        this.onChange = fn
    }
    // upon touching the element, this method gets triggered
    registerOnTouched(fn: any){
        this.onTouch = fn
    }
}