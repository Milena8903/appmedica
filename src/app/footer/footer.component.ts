import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {
  title = "appmedica";

  constructor(private router: Router) {}

  redirect(route:string) {
    this.router.navigate([`/${route}`]);
  }
}
