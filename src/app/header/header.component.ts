import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  options = [
    { name: "red", key: "1" },
    { name: "green", key: "2" },
    { name: "blue", key: "3" },
  ];

  ngOnInit(): void {}
}
