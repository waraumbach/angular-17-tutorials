import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-api',
  standalone: true,
  imports: [],
  template: `
    <div>
      signals-api works!
     <button (click)="increase()">increase</button>
     <button (click)="decrease()">decrease</button>
     {{ count() }}
     result: {{ result() }}
    </div>
  `,
  styles: ``
})
export class SignalsApiComponent {

  count = signal<number>(0)
  result = computed(() => this.count() * 2)

  constructor() {
    effect(() => {
      console.log('count', this.count())
    })

    effect(() => {
      console.log('result', this.result())
    })

  }

  increase() {
    this.count.set(this.count() + 1)
  }

  decrease() {
    this.count.set(this.count() - 1)
  }

}
