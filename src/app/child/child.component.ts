import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input({ required: true }) childColor = 'blue';
  @Output() childEvent = new EventEmitter<string>();
  @Input() showButton = true;

  sendEvent() {
    this.childEvent.emit('Message de la part du ChildComponent');
  }
}
