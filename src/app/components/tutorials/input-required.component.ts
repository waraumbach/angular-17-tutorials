import { Component, input, model, output } from '@angular/core';

//input ถือเป็น signal อันหนึ่ง
//mother send value to child component

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    <div>
     <h2>Child Component</h2>
     <p>{{name() }}</p>
     <button (click)="nameChanged('angular18')">Change name</button>
     child:{{myName()}}
    
     
    </div>
  `,
})

// input > send value by prop from mother to child
// output > send value by event from child to mother
//model >syn child and mother to get the same infos. (models =2ways , output/input=1way)

export class ChildComponent {
  name = input.required<string>();
  nameChange= output<string>()
  myName = model<string>()

  nameChanged(newName: string){
    this.nameChange.emit(newName)
    this.myName.set(newName)

  }
 
}

@Component({
  selector: 'app-input-required',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <div>
     
     <app-child [name]='name'
     [(myName)]='myName' 
     (nameChange)='nameChange($event)'/>
     model ={{myName()}} <br/>
     <button (click)="myName.set('angular 18')">Change model parent</button>
     
     
    </div>
  `,
})

export class InputRequiredComponent {
  name = 'angular';
  //model >syn child and mother to get the same infos //when child or parent update to know each other
  //instruction 1. declaring -class parent+child 2. template-parent {{prop}}
  
  
  myName= model<string>('parent')

  nameChange(evt:string){
    console.log('name changed',evt)
  }
 
}


