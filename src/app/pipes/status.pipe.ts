import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    let status = '';
    switch(value) {
      case 'APPLICATION':
        status = 'Candidature';
        break;
      case 'DISCUSSION':
        status = 'Echange';
        break;
        case 'WAITING_ASSOCIATION_VALIDATION':
          status = "Date à valider";
          break;
        case 'WAITING_MANAGER_VALIDATION':
          status = "En attente du manager";
          break;
      case 'IN_PROGRESS':
        status = "En cours";
        break;
      case 'USER_HAS_PARTICIPATED':
        status = "A participé";
        break;
      case 'CANCELLED':
        status = 'Annulé / refusé / non finalisé';
        break;
      default:
        status = value;
        break;
    }
    return status;
  }

}
