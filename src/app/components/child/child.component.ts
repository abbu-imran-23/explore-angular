import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {

  @Input() messageFromParent!: string;

  @Output() messageEvent = new EventEmitter<string>();

  messageToParent: string = "From Child Via ViewChild decorator";

  message: string = "From Child Via Output and Event Emitter decorator";

  sendMessage(): void {
    this.messageEvent.emit(this.message);
  }

  constructor() {}
  
  ngOnInit(): void {
    
  }

}
