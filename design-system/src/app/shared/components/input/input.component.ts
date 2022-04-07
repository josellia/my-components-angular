import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { DynamicForm } from 'src/app/models/form';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }]
})
export class InputComponent implements OnInit {
  config!: DynamicForm;
  
  constructor() { }

  ngOnInit(): void {
  }

}
