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
  inputText: string = "Default Text"

  isSuccess: boolean = true;
  isFailed: boolean = true;

  imageUrl: string = "https://burst.shopifycdn.com/photos/a-drop-of-pink-and-yellow-paint-in-water.jpg?width=300&format=pjpg&exif=0&iptc=0";

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

  clickButton(): void {
    console.log("Button Clicked");
  }

  showEnteredData(username: string): void {
    console.log(username);
  }

  showData(): void {
    console.log(this.inputText);
  }
  
}
