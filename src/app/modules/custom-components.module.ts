import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { MaterialModule } from './material.module';
import { CardViajeComponent } from 'src/app/components/card-viaje/card-viaje.component';
import { GestionarColectivosComponent } from 'src/app/components/gestionar-colectivos/gestionar-colectivos.component';
import { GestionarViajesComponent } from 'src/app/components/gestionar-viajes/gestionar-viajes.component';
import { CrearModificarViajesComponent } from 'src/app/components/crear-modificar-viajes/crear-modificar-viajes.component';
import { CrearModificarColectivosComponent } from 'src/app/components/crear-modificar-colectivos/crear-modificar-colectivos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../components/login/login.component';
import { CrearModificarCiudadesComponent } from '../components/crear-modificar-ciudades/crear-modificar-ciudades.component';
import { GestionarCiudadesComponent } from '../components/gestionar-ciudades/gestionar-ciudades.component';
import { BuscadorViajesComponent } from '../components/buscador-viajes/buscador-viajes.component';




@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    FooterComponent,
    CardViajeComponent,
    GestionarColectivosComponent,
    GestionarViajesComponent,
    GestionarCiudadesComponent,
    CrearModificarViajesComponent,
    CrearModificarColectivosComponent,
    CrearModificarCiudadesComponent,
    BuscadorViajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    FooterComponent,
    CardViajeComponent,
    GestionarColectivosComponent,
    GestionarViajesComponent,
    GestionarCiudadesComponent,
    CrearModificarViajesComponent,
    CrearModificarColectivosComponent,
    CrearModificarCiudadesComponent,
    BuscadorViajesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomComponentsModule { }
