import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public acciones:Array<string> = [
    "Usuario",
    "Certificacion",
    "Autorizacion",
    "Cita medica",
    "Consejos",
    "Cierre sesion"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
