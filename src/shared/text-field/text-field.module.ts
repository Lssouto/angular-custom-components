import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent, TextFieldDirective } from './text-field.component';



@NgModule({
  declarations: [TextFieldComponent, TextFieldDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    TextFieldComponent,
    TextFieldDirective
  ]
})
export class TextFieldModule { }
