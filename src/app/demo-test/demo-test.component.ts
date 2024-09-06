import { Component, ElementRef, Input, viewChild } from '@angular/core';

@Component({
  selector: 'app-demo-test',
  templateUrl: './demo-test.component.html',
  styleUrl: './demo-test.component.css',
})
export class DemoTestComponent {
  sayFun(para: HTMLInputElement) {
    alert('Hello ' + para.value);
  }

  // @viewChild('tempDate') dateofBirth: ElementRef;

  // @viewChild('tempAge') age: ElementRef;

  // calcAge() {
  //   console.log(this.dateofBirth);
  //   console.log(this.age)

  // }
  @Input()
  userInput: string = ' Initial';
}
