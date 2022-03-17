import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LoginModule } from "./login/login.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PoliticasComponent } from "./politicas/politicas.component";
import { CitaMedicaComponent } from "./cita-medica/cita-medica.component";
import { ConsejosComponent } from "./consejos/consejos.component";
import { AgendaComponent } from "./agenda/agenda.component";
import { GenericTitleComponent } from "./generic-title/generic-title.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PoliticasComponent,
    CitaMedicaComponent,
    ConsejosComponent,
    AgendaComponent,
    GenericTitleComponent

  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
