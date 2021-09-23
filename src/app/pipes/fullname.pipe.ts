import { Pipe, PipeTransform } from '@angular/core';
import { Volunteer } from '../model/volunteer';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: Volunteer, ...args: any[]): any {
    return value.firstName + ' ' + value.lastName;
  }

}
