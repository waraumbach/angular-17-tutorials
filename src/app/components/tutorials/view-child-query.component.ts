import { Component, ElementRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  template: `
      <ul>
        @for (item of items(); track $index) {
          <li>
            {{ item }}
          </li>
        }@empty{
          <li>No item</li>
        }
      </ul>
  `,
})
export class ListComponent {
  items = input<string[]>([])
}


@Component({
  selector: 'app-view-child-query',
  standalone: true,
  imports: [ListComponent],
  template: `
    <h2>
      view-child-query works!
    </h2>

    <div>

    <input #qty /> <br />
    <button (click)="setFocus()">Focus</button> <br />

    <app-list [items]="items" /> <br />
    <button (click)="addItem()">Add Item</button>

    </div>
  `,
  styles: ``
})
export class ViewChildQueryComponent {
  qty = viewChild.required<ElementRef<HTMLInputElement>>('qty')
  appList = viewChild.required(ListComponent)
  items = ['item1', 'item2', 'item3']


  setFocus() {
    this.qty().nativeElement.focus()
    this.qty().nativeElement.getAttribute('type')
  }

  addItem() {
    this.appList()?.items()?.push('item4')
  }
}