import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextFieldModule } from '../shared/text-field/text-field.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from '../shared/select/select.module';
import { CheckboxModule } from '../shared/checkbox/checkbox.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextFieldModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
