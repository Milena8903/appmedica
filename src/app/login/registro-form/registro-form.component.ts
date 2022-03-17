import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Usuario, UsuarioResponse } from "../models/user";
import { UsuariosService } from "../usuarios.service";

@Component({
  selector: "app-registro-form",
  templateUrl: "./registro-form.component.html",
  styleUrls: ["./registro-form.component.css"],
})
export class RegistroFormComponent implements OnInit {
  public msg: string = "";
  public token?: boolean = false;
  public RegisterForm: FormGroup = this.formBuilder.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuariosService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public keepRegister(e: Event) {
    e.preventDefault();
    const data = this.RegisterForm.value;
    console.log("data", "😋😋", data);
    this.usuarioService.register(data).subscribe({
      next: (data: UsuarioResponse) => {
        this._snackBar.open(data.msg, "😎");
        this.msg = data.msg;
        this.token = data.token;
      },
      error: (error: HttpErrorResponse) => {
        this._snackBar.open("Error de conexion", "😣");
      },
    });
  }
}
