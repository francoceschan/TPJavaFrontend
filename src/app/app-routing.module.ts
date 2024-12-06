import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GestionarViajesComponent } from 'src/app/components/gestionar-viajes/gestionar-viajes.component';
import { GestionarColectivosComponent } from 'src/app/components/gestionar-colectivos/gestionar-colectivos.component';
import { CrearModificarViajesComponent } from 'src/app/components/crear-modificar-viajes/crear-modificar-viajes.component';
import { CrearModificarColectivosComponent } from './components/crear-modificar-colectivos/crear-modificar-colectivos.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { CrearModificarCiudadesComponent } from './components/crear-modificar-ciudades/crear-modificar-ciudades.component';
import { GestionarCiudadesComponent } from './components/gestionar-ciudades/gestionar-ciudades.component';
import { ComprarBoletoComponent } from './components/comprar-boleto/comprar-boleto.component';
import { TablaBoletosCompradosComponent } from './components/tabla-boletos-comprados/tabla-boletos-comprados.component';
import { CrearModificarReseniaComponent } from './components/crear-modificar-resenia/crear-modificar-resenia.component';

const routes: Routes = [
  {
    path:'gestionar-viajes', 
    component:GestionarViajesComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMINISTRATIVO'] }
  },
  {
    path:'gestionar-viajes/crear-modificar-viaje', 
    component:CrearModificarViajesComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMINISTRATIVO'] }
  },
  {
    path:'gestionar-colectivos/crear-modificar-colectivo', 
    component:CrearModificarColectivosComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMINISTRATIVO'] }
  },
  {
    path:'gestionar-colectivos', 
    component:GestionarColectivosComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMINISTRATIVO'] }
  },
  {
    path:'gestionar-ciudades/crear-modificar-ciudad', 
    component:CrearModificarCiudadesComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMINISTRATIVO'] }
  },
  {
    path:'gestionar-ciudades', 
    component:GestionarCiudadesComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMINISTRATIVO'] }
  },
  {
    path:'comprar-boleto', 
    component:ComprarBoletoComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PASAJERO'] }
  },
  {
    path:'boletos-comprados', 
    component:TablaBoletosCompradosComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PASAJERO'] }
  },
  {
    path:'boletos-comprados/crear-modificar-resenia', 
    component:CrearModificarReseniaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PASAJERO'] }
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
