import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GestionarViajesComponent } from 'src/app/components/gestionar-viajes/gestionar-viajes.component';
import { GestionarColectivosComponent } from 'src/app/components/gestionar-colectivos/gestionar-colectivos.component';
import { CrearModificarViajesComponent } from 'src/app/components/crear-modificar-viajes/crear-modificar-viajes.component';
import { CrearModificarColectivosComponent } from './components/crear-modificar-colectivos/crear-modificar-colectivos.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:'gestionar-viajes', 
    component:GestionarViajesComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'gestionar-viajes/crear-modificar-viaje', 
    component:CrearModificarViajesComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'gestionar-viajes/crear-modificar-viaje/:id', 
    component:CrearModificarViajesComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'gestionar-colectivos/crear-modificar-colectivo', 
    component:CrearModificarColectivosComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'gestionar-viajes/crear-modificar-colectivo/:id', component:CrearModificarColectivosComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'gestionar-colectivos', 
    component:GestionarColectivosComponent,
    canActivate: [AuthGuard]
  },
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'', component:HomeComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
