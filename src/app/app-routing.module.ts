import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { LoginComponent } from './login/login.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
  {path: 'lista', component: ListaComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
