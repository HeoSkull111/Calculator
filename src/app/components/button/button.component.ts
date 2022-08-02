import { Component, OnInit,Input } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() name = '';

  constructor(public srv: CalculatorService) { }

  ngOnInit() {
  }

  set(){
    this.srv.inputView +=this.name
    console.log(this.srv.inputView);
  }
}
