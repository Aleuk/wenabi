import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from '../model/entry';

@Pipe({
  name: 'entryDate'
})
export class EntryDatePipe implements PipeTransform {

  transform(value: Entry, ...args: any[]): any {
    // TODO Conversion des dates
    return 'Le ' + value.dateBegin + ', de ' + value.dateBegin + ' à ' + value.dateEnd + ' (durée)';
  }

}
