import { Pipe, PipeTransform } from '@angular/core';
import {Item} from '../entites/item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args || args.length === 0) {
      return value;
    }

    switch (args) {
      case '0':
        console.log('Without filter');
        return value;
        break;
      case '1':
        console.log('Number > 10');
        return value.filter((item: Item) =>
          item.id > 10
        );
        break;
      case '2':
        console.log('Number > 100');
        return value.filter((item: Item) =>
          item.id > 100
        );
        break;
      case '3':
        console.log('Number > 200');
        return value.filter((item: Item) =>
          item.id > 200
        );
        break;
      default:
        console.log('Without filter');
        return value;
        break;
    }
  }
}
