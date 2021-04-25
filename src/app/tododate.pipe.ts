import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pl';

@Pipe({
  name: 'tododate'
})
export class TododatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let t = moment(value).format("LLL");
  //const d = moment.duration(moment().subtract(value)).days();
    let d = moment(value).fromNow();

    t = "dodane: " + t  + ", " + d;

    return t;
  }
}
