import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  load:boolean = true;
  router:Router;
  

  constructor(

    public login: LoginService

  ) { }

  ngOnInit(): void {
  }

  //login

  logeo(){

    this.load = false;
  
    setTimeout(() => {
    
      this.load = true;
    
    }, 4000);

    this.router.navigate(['/test/listar']);
    
   


  }

}
