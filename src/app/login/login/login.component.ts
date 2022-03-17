import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {


  public form: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(4)]],
  });

  public RegisterForm: FormGroup = this.formBuilder.group({
    name: ["", [Validators.required]],
    email2: ["", [Validators.required, Validators.email]],
    password2: ["", [Validators.required, Validators.minLength(4)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public keep(e: Event) {
    console.log(
      "🚀 ~ file: login.component.ts ~ line 29 ~ LoginComponent ~ keep ~ e",
      e
    );
    e.preventDefault();
    console.log(e.target);
    if (this.form.valid) {
      const data = this.form.value;
      console.log("data", "😋😋", data);
    }
  }
  public keepRegister(e: Event) {
    e.preventDefault();
    const data = this.form.value;
    console.log("data", "😋😋", data);
  }
}
