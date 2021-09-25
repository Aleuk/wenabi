import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VolunteersComponent } from './components/volunteers/volunteers.component';
import { VolunteerInfoComponent } from './components/volunteer-info/volunteer-info.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { CoordinatorFullnamePipe } from './pipes/coordinator-fullname.pipe';
import { StatusPipe } from './pipes/status.pipe';
import { VolunteerEntriesComponent } from './components/volunteer-entries/volunteer-entries.component';
import { EntryDatePipe } from './pipes/entry-date.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { LabelComponent } from './components/common/label/label.component';
import { SegmentedBarComponent } from './components/common/segmented-bar/segmented-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VolunteersComponent,
    VolunteerInfoComponent,
    FullnamePipe,
    CoordinatorFullnamePipe,
    StatusPipe,
    VolunteerEntriesComponent,
    EntryDatePipe,
    DateFormatPipe,
    LabelComponent,
    SegmentedBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
