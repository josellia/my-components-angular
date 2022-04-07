import { ValidatorFn } from "@angular/forms";

export type Fields = 'input' | 'select';

export type DynamicForm = {
    type: Fields;
    label: string;
    name: string;
    initialValue?: any;
    placeholder?: string;
    options?: string[];
    validation?: ValidatorFn[];
}