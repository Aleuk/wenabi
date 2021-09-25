import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from '../model/entry';
import { DateTime } from 'luxon';

@Pipe({
  name: 'entryDate'
})
export class EntryDatePipe implements PipeTransform {

  transform(value: Entry, ...args: any[]): any {
    // TODO Conversion des dates

    let begin: DateTime = DateTime.fromISO(value.dateBegin);
    let end: DateTime = DateTime.fromISO(value.dateEnd);
    if(begin && end) {
      let dt = begin.toFormat('dd/MM/yyyy');
      let beginHour = begin.toFormat("HH'h'mm");
      let endHour = end.toFormat("HH'h'mm");
      let diff = end.diff(begin, ["hours", "minutes"]);
      let diffHour = diff.toObject().hours;
      let diffMinute = diff.toObject().minutes;
      let duration = diff.toObject().hours + 'h' + (diffMinute > 9 ? '0'+diffMinute: '0'+diffMinute);
      return 'Le ' + dt + ', de ' + beginHour + ' à ' + endHour + ' (' + duration + ')';
    } else {
      return 'Le ' + value.dateBegin + ', de ' + value.dateBegin + ' à ' + value.dateEnd;
    }
  }

}
