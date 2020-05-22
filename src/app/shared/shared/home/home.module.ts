import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/@core/services/auth.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,

  ],
  providers: [
    AuthService
  ]
})
export class HomeModule { }
