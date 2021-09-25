import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from 'src/app/model/status';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() status: Status|null = null;
  @Output() onStatusClicked = new EventEmitter<boolean>();
  private active:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.active = !this.active;
    // if count is null, the label is not clickable
    if(this.status.count !== null) {
      this.onStatusClicked.emit(this.active);
    }
  }

}
