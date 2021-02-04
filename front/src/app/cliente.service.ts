import { Injectable } from '@angular/core';
import{LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    public logeo:LoginService,
  ) { }


  login(){
    this.logeo.ingresar()
  }
}
