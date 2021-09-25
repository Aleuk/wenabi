import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/model/status';
import { Volunteer } from 'src/app/model/volunteer';
import { WishesService } from 'src/app/services/wishes.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {

  public volunteers: Volunteer[] = [];
  private volunteersReference: Volunteer[] = []; // contains all volunteers for front filtering
  public status: Status[] = [];
  private disabledStatus: string[] = []; // contains the status to filter
  public nbVolunteers: number = 0;

  constructor(private _wishes: WishesService) { }

  ngOnInit() {
    this._wishes.getWishes().subscribe(
      (response) => {
        console.log("response", response);
        response.forEach(element => {
          let volunteer = Volunteer.convert(element);
          this.volunteers.push(volunteer);
        });
        this.volunteersReference = _.assign([],this.volunteers);
      }
    );


    this._wishes.getStats().subscribe(
      (response: Status[]) => {
        console.log("response", response);
        this.status = response;
        this.nbVolunteers = _.reduce(this.status, (sum, n) => {
          return sum + n.count;
        }, 0);
      }
    )
  }

  onStatusClicked(status: Status, active: boolean) {
    if(!active) {
      this.disabledStatus.push(status.status);
    } else {
      _.remove(this.disabledStatus, (n) => {
        return n == status.status;
      })
    }
    this.volunteers.splice(0,this.volunteers.length);
    this.volunteers = (_.filter(this.volunteersReference, (o) => {
      return !_.includes(this.disabledStatus, o.status);
    }))
  }

}
