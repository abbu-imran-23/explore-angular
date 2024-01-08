import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  githubApi(): any {
    return this.http.get("https://api.github.com/users/abbu-imran-23")
  }

}
