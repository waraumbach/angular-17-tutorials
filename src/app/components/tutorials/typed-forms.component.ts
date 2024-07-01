
import { JsonPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


//Tyeform 2 types 1.untype เวลาดึงข้อมูลจะไม่ทราบเลยว่าเป็นตัวเลข "" มันจะไม่ checktype 
//Tyeform 2 types 2.Type ถ้าต้องการข้อมูลที่เจาะจง เอาuntype ออก
//FromGroup declared inside > inform infos inside //
// set generic type 
@Component({
  selector: 'app-typed-forms',
  standalone: true,
 imports: [ReactiveFormsModule,JsonPipe],
  template: `
    <div>
      <form [formGroup]="login">
      username: <input type="text" formControlName='username'> <br />
      password: <input type="text" formControlName='password'> <br />
      age: <input type="text" formControlName='age'><br />
      {{ login.value |json }}
    
      <button (click)="reset()">reset</button>
      </form>
 </div>
  `,
})
//nonNullable= ลอคค่าเริ่มต้น
export class TypedFormsComponent {
    login = new FormGroup({
    username: new FormControl<string>('test' ,{nonNullable: true}),
    password: new FormControl<string>('2345'),
    age: new FormControl<number>(20)
  })
  //add function 'submit'
  submit(){
    const value = this.login.value;
    //console.log(this.login.value)
  }
  reset (){
    this.login.reset();
  }

}
 
