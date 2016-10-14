import { Component } from '@angular/core';
@Component ({
  selector: 'my-app',
  template:
  `<h1>My First Angular App </h1>
  <h3>First Name : {{myJson.fname}}</h3>
  <h3>Last Name : {{myJson.lname}}</h3>
  <h3 (click)="popup(myJson.age)">Age : {{myJson.age}}</h3>
  <table>
    <tr (click)="popup(a)" *ngFor="let a of myArr"><td>{{a}}</td></tr>
  </table>
  Enter a name and press Enter, also check browser console<br>
  <input #a (keyup.enter)="callMe(a.value)"/>
  {{a.value}}
  <hr>
  Two way binding :
  <br>
  <input type="text" class="form-control" id="name" required [(ngModel)]="model.name" name="name">
  {{model.name}}
  `
})
export class AppComponent {
  myJson = {
    "fname":"Digender",
    "lname" : "Mahara",
    "age":25
    }
    myArr = [];
    model = {};
    popup (age) {
      alert("You clicked my age : "+age);
    }
    constructor(){
       this.myArr = [10,20,30,40,50,60,70,80,90,100];
       this.model={"name":"Hello"};
    }
    callMe(msg: string){
       console.log("Text : "+msg);
    }
}
