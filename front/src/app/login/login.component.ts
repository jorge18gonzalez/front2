import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  load:boolean = true;

  constructor(

    public login: LoginService

  ) { }

  ngOnInit(): void {
  }

  //login


  ingresar(){
    setTimeout(() => {
      this.login.ingresar()
    }, 4000);
  }

}
