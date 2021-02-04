import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-test',
  templateUrl: './listar-test.component.html',
  styleUrls: ['./listar-test.component.css']
})
export class ListarTestComponent implements OnInit {

  constructor() { }

  listar = [
   {"nombre":"marco" , "apellido":"parolo" , "resultado":250},
   {"nombre":"cristiano" , "apellido":"ronaldo" , "resultado":450},
   {"nombre":"neymar" , "apellido":"tapete","resultado":500}
  ]

  ngOnInit(): void {
  }

}
