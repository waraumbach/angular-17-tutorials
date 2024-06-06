import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bind-route-input',
  standalone: true,
  imports: [],
  template: `
    <p>
      bind-route-input works!
    </p>
  `,
  styles: ``
})
export class BindRouteInputComponent {
  router = inject(Router)
}
