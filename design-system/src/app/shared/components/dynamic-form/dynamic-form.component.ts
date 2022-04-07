import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicForm } from 'src/app/models/form';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() config: DynamicForm[] = [];
  @Output() save = new EventEmitter();

  form = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

  createForm() {
    this.config.forEach((control) => this.form.addControl(
      control.name,
      new FormControl(control.initialValue, control.validation)
    ));
  }
}
