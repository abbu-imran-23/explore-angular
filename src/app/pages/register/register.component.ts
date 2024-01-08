import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  users: Array<User> = [];
  cityName: string = "Bangalore";

  constructor(public formBuilder: FormBuilder, private authService: AuthService) {}

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

  response: any;
  makeApiCall(): void {
    this.authService.githubApi().subscribe(
      (data: any) => {
        this.response = data;
        console.log(this.response);
      },
      (error: any) => {
        // Handle error
        console.error(error);
      }
    );
  }

}
