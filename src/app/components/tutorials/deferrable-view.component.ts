import { Component } from '@angular/core';

@Component({
  selector: 'app-large',
  standalone: true,
  imports: [],
  template: `
    <h1>Large Component</h1>
  `,
})
export class LargeComponent {

}


@Component({
  selector: 'app-deferrable-view',
  standalone: true,
  imports: [LargeComponent],
  template: `
    <button #trigger>trigger</button>

    @defer(on interaction(trigger)) {
      <app-large />
    }@placeholder(minimum 50ms) {
      <div>wating...</div>
    }@loading {
      <div>Loading...</div>
    } @error {
      <div>Error... loading</div>
    }
  `,
})
export class DeferrableViewComponent {

}
