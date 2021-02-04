import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  public usuario:string = "jorgetgonzalez3@gmail.com";
  public contra:string = "1234567";
 

  constructor() { }
  

   ingresar() {
   
    
    if (this.usuario == "jorgetgonzalez3@gmail.com" && this.contra == "1234567") {
      console.log('logeado')
    }else{
      console.log('error')
    }
  }


 
}
