import { Component, input, model, output } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h2>Child component</h2>
      <p>{{ name() }}</p>
      <button (click)="nameChanged('angular 17')">Change name</button>
      child: {{ myName() }}
    </div>
  `,
})

export class ChildComponent {
  name = input.required<string>()
  nameChange = output<string>()
  myName = model<string>()

  nameChanged(newName: string) {
    this.nameChange.emit(newName)
    this.myName.set(newName)
  }
}


@Component({
  selector: 'app-input-required',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <app-child
    [name]="name"
    [(myName)]="myName"
    (nameChange)="nameChange($event)"/>
    model: {{ myName() }} <br />
    <button (click)="myName.set('angular 18')">Change model parent</button>
  `,
})
export class InputRequiredComponent {
  name = 'angular'
  myName = model<string>('parent')

  nameChange(evt: string) {
    console.log('name changed', evt)
  }
}
