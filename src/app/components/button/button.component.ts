import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // component input props - receives
  @Input() text!: string;
  @Input() color!: string;
  // component output prop - send
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // Emits the click event back to the component that called button (it's parent)
  onClick(): void {
    this.btnClick.emit();
  }
}
