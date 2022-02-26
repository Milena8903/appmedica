import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AgendaComponent} from './agenda/agenda.component';
import {CitaMedicaComponent} from './cita-medica/cita-medica.component';
import {ConsejosComponent} from './consejos/consejos.component';
import {PoliticasComponent} from './politicas/politicas.component';

// por defecto a penas el usuario abra la pagina
// se vaya a welcome
const routes: Routes = [
  {
    path: "",
    redirectTo: "/welcome",
    pathMatch: "full",
  },
  {
    path:'agenda',
    component: AgendaComponent
  },
  {
    path:'cita-medica',
    component: CitaMedicaComponent
  },
  {
    path:'consejos',
    component: ConsejosComponent
  },
  {
    path:'politicas',
    component: PoliticasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
