import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c-to-p-childA',
  templateUrl: './c-to-p-childA.component.html',
  styleUrls: ['./c-to-p-childA.component.scss']
})
export class CtoPChildAComponent implements OnInit {

  // TODO: make an Event Emitter to send outwards

  @Output() messageToParentEvent = new EventEmitter<string>();

  messageData: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onMessageChange(message: string) {
    
    this.messageToParentEvent.emit(message);
  }

}
