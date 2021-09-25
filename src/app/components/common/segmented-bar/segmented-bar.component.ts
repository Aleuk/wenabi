import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/model/status';
import * as _ from 'lodash';

@Component({
  selector: 'app-segmented-bar',
  templateUrl: './segmented-bar.component.html',
  styleUrls: ['./segmented-bar.component.scss']
})
export class SegmentedBarComponent implements OnInit {

  @Input() status: Status[] = [];
  @Input() nbVolunteers: number = 0;

  constructor() { }

  ngOnInit() {
    console.log("nbVol", this.nbVolunteers)
  }

}
