import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Usuario, UsuarioResponse } from "../models/user";
import { UsuariosService } from "../usuarios.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(4)]],
  });
  public msg: string = "";
  public token?: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuariosService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public keep(e: Event) {
    e.preventDefault();
    console.log(e.target);
    if (this.form.valid) {
      const data = this.form.value as Usuario;
      console.log("data", "😋😋", data);
      this.usuarioService.login(data).subscribe({
        next: (data: UsuarioResponse) => {
          this._snackBar.open(data.msg, data.token ? "bien" : "😣");
          this.msg = data.msg;
          this.token = data.token;
        },
        error: (error: HttpErrorResponse) => {
          this._snackBar.open("Error de conexion", "😣");
        },
      });
    }
  }
}
