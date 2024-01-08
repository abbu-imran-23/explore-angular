import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  users: Array<User> = [];
  cityName: string = "Bangalore";

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    })
  }

  onRegisterFormSubmit(userData: User): void {
    console.log(userData);
    this.users.push(userData);
    console.log(this.users);
    this.ngOnInit();
  }

}
