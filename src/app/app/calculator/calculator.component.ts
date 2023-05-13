import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  title = "Mi Calculadora en Angular";
  
  public num1!: number;
  public num2!: number;
  public num3!: number;

  add(){
    this.num3=this.num1 + this.num2;
  }

  substract(){
    this.num3=this.num1 - this.num2;
  }

  multiply(){
    this.num3=this.num1 * this.num2;
  }

  divide(){
    this.num3=this.num1 / this.num2;
  }
}
