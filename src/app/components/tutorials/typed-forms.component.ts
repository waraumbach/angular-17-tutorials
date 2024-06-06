import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-typed-forms',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <div>
  <form [formGroup]="login">
    username : <input type="text" formControlName="username"> <br />
    password : <input type="text" formControlName="password"> <br />
    age : <input type="text" formControlName="age"> <br />
      {{ login.value | json }}
    <button (click)="reset()">reset</button>
  </form>
    </div>
  `,
})
export class TypedFormsComponent {

  login = new FormGroup({
    username: new FormControl<string>('test', { nonNullable: true }),
    password: new FormControl<string>('23345'),
    age: new FormControl<number>(20),
  })

  submit() {
    const value = this.login.value;
  }

  reset() {
    this.login.reset();
  }

}
