import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  template: `
    <p>
      control-flow works!
    </p>

    @if(qty() > 20){
      div: {{ qty() }} > 20
    }@else{
      div: {{ qty() }} <= 20
    }

    <h1>Product</h1>
    @for (product of products(); track $index) {
        <div>{{$index + 1}}. {{ product}}</div>
    }@empty {
        <div>No product</div>
    }

    <h1>switch case</h1>
    @switch (gender()) {
      @case (1){
        <div>Male</div>
      }
      @case (2) {
        <div>FeMale</div>
      }
      @default {
        <div>Unknown Gender</div>
      }
    }
  `,
  styles: ``
})
export class ControlFlowComponent {
  qty = signal<number>(19)
  products = signal<string[]>([])
  gender = signal(0)
}
