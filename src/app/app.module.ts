import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ROUTES } from './app.routes';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { BarbersComponent } from './pages/barbers/barbers.component';
import { AppoinmentComponent } from './pages/appoinment/appoinment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { MidlebarComponent } from './components/midlebar/midlebar.component';
import { SidebarTopComponent } from './components/sidebar-top/sidebar-top.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarLeftComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    ServicesComponent,
    BarbersComponent,
    AppoinmentComponent,
    ContactComponent,
    LoginComponent,
    MidlebarComponent,
    SidebarTopComponent,
    RegisterComponent,
    AccountComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
