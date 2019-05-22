import { Pipe, PipeTransform } from '@angular/core';
import {Item} from '../entites/item';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Item[], searchValue: string): Item[] {

    console.log(searchValue);

    if (!searchValue || searchValue.length === 0) {
      return value;
    }

    return value.filter((item: Item) =>
      item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    );
  }
}
