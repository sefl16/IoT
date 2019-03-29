import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensorComponent } from './components/sensor/sensor.component';
import { DeviceComponent } from './components/device/device.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ApartmentComponent } from './apartment/apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorComponent,
    DeviceComponent,
    CustomerComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    ApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
