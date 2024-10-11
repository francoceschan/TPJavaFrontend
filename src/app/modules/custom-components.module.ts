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
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../components/login/login.component';




@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    FooterComponent,
    CardViajeComponent,
    GestionarColectivosComponent,
    GestionarViajesComponent,
    CrearModificarViajesComponent,
    CrearModificarColectivosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    FooterComponent,
    CardViajeComponent,
    GestionarColectivosComponent,
    GestionarViajesComponent,
    CrearModificarViajesComponent,
    CrearModificarColectivosComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomComponentsModule { }
