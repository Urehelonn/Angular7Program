import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users:User[] = [];
  private url  = 'http://localhost:3000/api'; 
  constructor(private http: HttpClient) { }

  getUsers(){
    this.http.get(this.url+'users').subscribe;    
  }

  addUsers(user: User){}

  removeUser(id: string){}

}
