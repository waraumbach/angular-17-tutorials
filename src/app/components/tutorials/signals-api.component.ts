import { Component, computed, effect, signal } from '@angular/core';
//signal = การทำ reactive = การเปลี่ยนค่าตัวมันเอง ทำให้ การทำ reactive ง่ายขึ้น 

@Component({
  selector: 'app-signals-api',
  standalone: true,
  imports: [],
  template: `
    <div>
      signals-api works!
      <button (click)="increase()">increase</button>
      <button (click)="decrease()">decrease</button>
      {{count()}}
      result:{{result()}}
    
    </div>
  `,
  styles: ``
})
export class SignalsApiComponent {
//added generic type <>
//ถ้าตัวแปร variable was changed > computed changed 
  count = signal<number>(0)
  result= computed(() => this.count() *2)

  // effect can track value when we would like to know that signal change
  // effect check bug ,debug 
  // compute can track 
  // signal change > effect change > added more 
  // calculate > cart > we can use signal to compute something on cart ( react = useState, effect = useEffect =tracking debug),
  constructor(){
    effect(() => {
      console.log('count', this.count())
    })
    effect(() => {
      console.log('result', this.result())
    })

  }

  increase() {
    this.count.set(this.count() +1)
  }
  decrease() {
    this.count.set(this.count() - 1)
  }



   

  }

  

  


