import { Component, input, output } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h2>Child component</h2>
      <p>{{ name() }}</p>
      <button (click)="nameChanged('angular 17')">Change name</button>
    </div>
  `,
})

export class ChildComponent {
  name = input.required<string>()
  nameChange = output<string>()

  nameChanged(newName: string) {
    this.nameChange.emit(newName)
  }
}


@Component({
  selector: 'app-input-required',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <app-child [name]="name" (nameChange)="nameChange($event)"/>
  `,
})
export class InputRequiredComponent {
  name = 'angular'

  nameChange(evt: string) {
    console.log('name changed', evt)
  }
}
