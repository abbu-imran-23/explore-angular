import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../../components/child/child.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {

  displayText: string = "This is Home Page";
  messageToChild: string = "Hello Child";
  messageFromChild!: string;
  message!: string;

  recieveMessage($event: string): void {
    console.log($event);
    this.message = $event;
  }

  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  constructor() {}
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    console.log(this.childComponent);
    this.messageFromChild = this.childComponent.messageToParent;
  }
  
}
