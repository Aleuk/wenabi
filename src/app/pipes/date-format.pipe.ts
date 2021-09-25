import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    let dt: DateTime = DateTime.fromISO(value);
    if(dt) {
      return dt.setLocale('fr').toFormat('dd LLLL yyyy');
    }
    return value;
  }

}
