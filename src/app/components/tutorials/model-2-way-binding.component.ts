import { Component, effect, model, OnChanges, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: ` 
    <h2>
      Child Component
    </h2>
    <div>
      {{name()}} <br />
      <button (click)="resetName()">Reset Name</button>
    </div>
  `,
  styles: ``
})
export class ChildComponent implements OnChanges {

  name = model();
  resetName() {
    this.name.set("John Doe");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child: changed', changes);
  }
}


@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: ` 
    <h2>
      Parent Component
    </h2>
    {{name()}} <br />
    <button (click)="updateName()">Update Name</button>
    <app-child [(name)]="name"></app-child>
  `,
})
export class Model2WayBindingComponent {
  name = signal("John Doe");

  constructor() {
    effect(() => {
      console.log("Parent Effect: Name changed to: ", this.name());
      this.printAfterNameChange();
    }, { allowSignalWrites: true })
  }

  updateName() {
    this.name.set("New Jane Doe");
  }

  printAfterNameChange() {
    console.log("Parent: After Name changed to: ", this.name());
  }
}
