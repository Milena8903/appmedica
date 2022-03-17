import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioResponse, Usuario } from "./models/user";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class UsuariosService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  register(user: Usuario):Observable<UsuarioResponse> {
    return this.httpClient.post<UsuarioResponse>(
      "http://localhost:1119/usuarios/",
      user,
      httpOptions
    );
  }

  login(user: Usuario):Observable<UsuarioResponse> {
    return this.httpClient.post<UsuarioResponse>(
      "http://localhost:1119/usuarios/login",
      user,
      httpOptions
    );
  }
}
