import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App </h1>
  <h3>First Name : {{myJson.fname}}</h3>
  <h3>Last Name : {{myJson.lname}}</h3>
  <h3 (click)="popup(myJson.age)">Age : {{myJson.age}}</h3>
  `
})
export class AppComponent {
  myJson = {
    "fname":"Digender",
    "lname" : "Mahara",
    "age":25
    }
    popup(age){
      alert("You clicked my age : "+age);
    }
}
