import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { GenericTitleComponent } from "../generic-title/generic-title.component";
import { AngularmaterialModule } from "./angularmaterial/angularmaterial.module";
import { LoginFormComponent } from "./login-form/login-form.component";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegistroFormComponent } from "./registro-form/registro-form.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LogintitlegenericComponent } from './logintitlegeneric/logintitlegeneric.component';
@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
    LoginFormComponent,
    RegistroFormComponent,
    LogintitlegenericComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    AngularmaterialModule,
  ],
  exports:[]
})
export class LoginModule {}
