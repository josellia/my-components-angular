import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { DynamicForm } from 'src/app/models/form';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }]
})
export class SelectComponent implements OnInit {
  config!: DynamicForm;

  constructor() { }

  ngOnInit(): void {
  }

}
