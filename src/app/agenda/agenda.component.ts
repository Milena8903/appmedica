import { Component, OnInit } from '@angular/core';
enum selectedOption {
  Consultar = "Consultar",
  Solicitar = "Solicitar"
}
type acceptedOptions = "Consultar" | "Solicitar";
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent implements OnInit {
  public selectedStr:acceptedOptions | null = null;
  constructor() { }

  ngOnInit(): void {
  }

  public setSelected(value:acceptedOptions){
    this.selectedStr = value;
  }

}
