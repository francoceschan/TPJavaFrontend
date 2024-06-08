import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GestionarViajesComponent } from 'src/app/components/gestionar-viajes/gestionar-viajes.component';
import { GestionarColectivosComponent } from 'src/app/components/gestionar-colectivos/gestionar-colectivos.component';
import { CrearModificarViajesComponent } from 'src/app/components/crear-modificar-viajes/crear-modificar-viajes.component';
import { CrearModificarColectivosComponent } from './components/crear-modificar-colectivos/crear-modificar-colectivos.component';

const routes: Routes = [
  {path:'gestionar-viajes', component:GestionarViajesComponent},
  {path:'gestionar-viajes/crear-modificar-viaje', component:CrearModificarViajesComponent},
  {path:'gestionar-viajes/crear-modificar-viaje/:id', component:CrearModificarViajesComponent},
  {path:'gestionar-viajes/crear-modificar-colectivo', component:CrearModificarColectivosComponent},
  {path:'gestionar-viajes/crear-modificar-colectivo/:id', component:CrearModificarColectivosComponent},
  {path:'gestionar-colectivos', component:GestionarColectivosComponent},
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
