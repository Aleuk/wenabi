import { Component, Input, OnInit } from '@angular/core';
import { Volunteer } from 'src/app/model/volunteer';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-volunteer-info',
  templateUrl: './volunteer-info.component.html',
  styleUrls: ['./volunteer-info.component.scss']
})
export class VolunteerInfoComponent implements OnInit {
  faHandPointRight=faHandPointRight;
  faMapMarkerAlt=faMapMarkerAlt;
  faUser=faUser;

  @Input() volunteer: Volunteer = null;

  constructor() { }

  ngOnInit() {
  }

}
