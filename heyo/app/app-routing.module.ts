import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './components/customer/customer.component';
import {LoginComponent} from './components/login/login.component';
import {SensorComponent} from './components/sensor/sensor.component';
const routes: Routes = [
    {path: 'customer', component: CustomerComponent},
     {path: 'sensor', component: SensorComponent},
     {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
