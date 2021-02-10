import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { Router} from '@angular/router';

import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  load:boolean = true;
  router:Router;
  

  constructor(

    public login: LoginService,
    private Router:Router,
    

  ) { }

  ngOnInit(): void {
  }

  //login

  logeo(){

    this.load = false;
  
    setTimeout(() => {

      Swal.fire({
        icon: 'success',
        title: 'login exitoso',
        text: 'esta ciendo redirigido',
      })
    
      this.Router.navigate(['test/listar']);
    
    }, 4000);

  }

}
