import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { StudentService } from './common/student.service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentdetailsComponent } from './dashboard/studentdetails/studentdetails.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent,WelcomeComponent,PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    UserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path:'welcome', component:WelcomeComponent},
      { path:'students', component: DashboardComponent },
      { path:'pagenotfound',component:PagenotfoundComponent },
      { path: 'user', loadChildren:'./user/user.module#UserModule'},
      { path:'', redirectTo:'welcome',pathMatch:'full' },
      { path: '**', redirectTo:'pagenotfound', pathMatch: 'full'},
    ])
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
