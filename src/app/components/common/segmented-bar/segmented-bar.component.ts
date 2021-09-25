import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/model/status';
import * as _ from 'lodash';
import { StatusPipe } from 'src/app/pipes/status.pipe';

@Component({
  selector: 'app-segmented-bar',
  templateUrl: './segmented-bar.component.html',
  styleUrls: ['./segmented-bar.component.scss']
})
export class SegmentedBarComponent implements OnInit {

  @Input() status: Status[] = [];
  @Input() nbVolunteers: number = 0;

  constructor(private _statusPipe: StatusPipe) { }

  ngOnInit() {
    console.log("nbVol", this.nbVolunteers)
  }

}
