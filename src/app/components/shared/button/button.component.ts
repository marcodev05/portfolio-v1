import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{

  @Input() label = 'Bouton';
  @Output() onClick = new EventEmitter<void>();

  constructor() { }

}
