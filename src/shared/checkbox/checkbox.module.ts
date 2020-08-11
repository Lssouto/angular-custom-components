import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent, CheckboxDirective } from './checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckboxComponent,
    CheckboxDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CheckboxComponent,
    CheckboxDirective
  ]
})
export class CheckboxModule { }
