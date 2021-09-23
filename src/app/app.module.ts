import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VolunteersComponent } from './components/volunteers/volunteers.component';
import { VolunteerInfoComponent } from './components/volunteer-info/volunteer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VolunteersComponent,
    VolunteerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
