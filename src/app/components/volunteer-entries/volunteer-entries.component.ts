import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'src/app/model/entry';

@Component({
  selector: 'app-volunteer-entries',
  templateUrl: './volunteer-entries.component.html',
  styleUrls: ['./volunteer-entries.component.scss']
})
export class VolunteerEntriesComponent implements OnInit {

  @Input() entries: Entry[] = [];
  constructor() { }

  ngOnInit() {
  }

}
