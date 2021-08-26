import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  public num1!: number;
  public num2!: number;
  public result!: number;

  addition(){
    this.result=this.num1+this.num2;
  }

  sub(){
    this.result=this.num1-this.num2;
  }

  div(){
    this.result=this.num1/this.num2;
  }

  mul(){
    this.result=this.num1*this.num2;
  }

}
