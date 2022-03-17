import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logintitlegeneric',
  templateUrl: './logintitlegeneric.component.html',
  styleUrls: ['./logintitlegeneric.component.css']
})
export class LogintitlegenericComponent implements OnInit {

  @Input() title:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
