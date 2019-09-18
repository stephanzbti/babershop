import {Routes} from '@angular/router'
import {MainComponent} from './pages/main/main.component'
import {AboutComponent} from './pages/about/about.component'
import {ServicesComponent} from './pages/services/services.component'
import {BarbersComponent} from './pages/barbers/barbers.component'
import {AppoinmentComponent} from './pages/appoinment/appoinment.component'
import {ContactComponent} from './pages/contact/contact.component'
import {LoginComponent} from './pages/login/login.component'

export const ROUTES: Routes = [
    {path: '', component: MainComponent},
    {path: 'about', component: AboutComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'barbers', component: BarbersComponent},
    {path: 'appointment', component: AppoinmentComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent},
]