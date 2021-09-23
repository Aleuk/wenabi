import { Pipe, PipeTransform } from '@angular/core';
import { Volunteer } from '../model/volunteer';

@Pipe({
  name: 'coordinatorFullname'
})
export class CoordinatorFullnamePipe implements PipeTransform {

  transform(value: Volunteer, ...args: any[]): any {
    return value.coordinatorFirstName + ' ' + value.coordinatorLastName;
  }

}
