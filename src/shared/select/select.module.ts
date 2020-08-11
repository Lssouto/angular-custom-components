import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent, SelectOptionDirective } from './select.component';



@NgModule({
  declarations: [SelectComponent, SelectOptionDirective],
  imports: [
    CommonModule
  ],
  exports: [
    SelectComponent, SelectOptionDirective
  ]
})
export class SelectModule { }
