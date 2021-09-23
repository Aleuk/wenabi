import { Component, OnInit } from '@angular/core';
import { Volunteer } from 'src/app/model/volunteer';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {

  public volunteers: Volunteer[] = [];

  constructor(private _wishes: WishesService) { }

  ngOnInit() {
    this._wishes.getWishes().subscribe(
      (response) => {
        console.log("response", response);
        response.forEach(element => {
          let volunteer = Volunteer.convert(element);
          this.volunteers.push(volunteer);
        });
      }
    )
  }

}
