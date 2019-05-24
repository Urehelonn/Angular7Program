import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../../rc-server/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) {}

  getAllCats(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8000/api/cats')
  }
}
