import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-title',
  templateUrl: './generic-title.component.html',
  styleUrls: ['./generic-title.component.css']
})
export class GenericTitleComponent implements OnInit {
  @Input() title = '';
  constructor() { }

  ngOnInit(): void {
  }

}
