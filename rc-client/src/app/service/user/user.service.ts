import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../../rc-server/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) {}

  printMsg(){
    console.log('connect to service');
  }

  getUsers(): User[] {
    let users: User[] = [];
    this.http.get<User[]>('http://localhost:3000/api/user').subscribe(
      (res)=>{
        console.log(res);
        users = res;
    });
    return users;
  }


  loginAttempt(user: User): boolean{
    return true;
  }

  signUp(){
    
  }
}
