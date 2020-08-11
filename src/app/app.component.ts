import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-components';

  form: FormGroup;

  listItens = [
    {value: 'lucas', label: 'Lucas'},
    {value: 'regiane', label: 'Regiane'}
  ];

  ngOnInit() {
    this.form = this.fb.group({
      'input': [''],
      'select': [''],
      'checkbox': ['', Validators.requiredTrue]
    });
  }

  constructor(private fb: FormBuilder) {}
}
