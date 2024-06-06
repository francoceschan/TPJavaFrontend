import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from 'src/components/home/home.component';
import { MaterialModule } from './material.module';
import { CardViajeComponent } from 'src/components/card-viaje/card-viaje.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    CardViajeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    CardViajeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomComponentsModule { }
