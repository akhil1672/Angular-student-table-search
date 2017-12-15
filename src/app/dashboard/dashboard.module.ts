import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { PipesearchPipe } from '../pipesearch.pipe';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { ButtoncolorDirective } from './buttoncolor.directive';
import { PercentagePipe } from '../percentage.pipe';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [DashboardComponent, PipesearchPipe,NavbarComponent, ButtoncolorDirective,PercentagePipe],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
