import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../../rc-server/models/user';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
  user: User;
  users:User[];
  constructor(private userService: UserService) { }

  ngOnInit() {}

  loginAttempt(loginF){
    //call service to interact server-side function
    this.users = this.userService.getUsers();
    this.userService.loginAttempt(this.user);
  }

  getUsers(){
    this.userService.printMsg();
    this.users = this.userService.getUsers();    
  }
}
