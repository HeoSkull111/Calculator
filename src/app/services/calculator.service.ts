import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  inputView = '';
  callbacks: any[] = [];
  constructor() { }
  currentValue: number = 0;
  currentOperator: string = '';
  previousValue: number = 0;
  calculate(x: number, y: number, operator: string) {
    let result = 0;
    switch (operator) {
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
    }
    return result;
  }
  reset() {
    this.currentValue = 0;
    this.currentOperator = '';
    this.previousValue = 0;
    for (let callback of this.callbacks) {
      callback(this.currentValue);
    }
  }
  listenCurrentValue(callback: (value: any) => void) {
    this.callbacks.push(callback);
  }
  setCurrentValue(value: number) {
    this.currentValue = value;
    for (let callback of this.callbacks) {
      callback(this.currentValue);
    }
  }
}
