import { Pipe, PipeTransform } from '@angular/core';
import {Item} from '../entites/item';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const argsArr = args.split('');
    console.log(argsArr);

    if (!args || args.length === 0) {
      return value;
    }

    return value.filter((item: Item) =>
      argsArr.every((arg: string) => item.title.includes(arg))
    );
  }
}
