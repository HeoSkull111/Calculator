import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  result = '0';

  @Output() newItemEvent = new EventEmitter<string>();
  constructor(public srv: CalculatorService) {
  }

  getNumber(value: any): void {
    let data = parseFloat(value);
    console.log(value);
    return value;
  }

  ngOnInit(): void {
  }

  cal() {
    try {
      let result = this.srv.inputView;
      let str = "12/5*9+9.4*2"
      let res2 = (new Function('return ' + result)())
      if (result != undefined) {
        this.srv.inputView = res2;
        console.log(res2)
        if (res2 == undefined) {
          this.srv.inputView = result;
        }
      }
    } catch (error) {
      this.srv.inputView = ('error');
    }
  }
  clear() {
    this.srv.inputView = '';
  }
}
