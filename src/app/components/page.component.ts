import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  template: `
    <p>
      page works! path: {{ id() }} query: {{ page() }}
    </p>
  `,
  styles: ``
})
export class PageComponent {
  id = input<string>()
  page = input<string>()


}
