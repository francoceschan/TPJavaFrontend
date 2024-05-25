import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from 'src/app/home/home.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    NavBarComponent,
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomComponentsModule { }
