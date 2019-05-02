import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {Item} from './item';
import {ITEMS} from './mock-items';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SelectItemService {

  selectedItems: Item[] = ITEMS.slice().filter(item => item.selected);

  constructor() {
  }

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }

  getSelectedItems(): Observable<Item[]> {
    return of(this.selectedItems);
  }

  delete(item: Item): void {
    console.log(`${item.id} was deleted`);
  }

  deleteSelectItems(item: Item): void {
   // this.selectedItems = this.selectedItems.filter(h => h !== item);
    console.log(`${item.id} was deleted`);
  }

  setSelectItems(currentSelectItems: Item[]) {

    this.selectedItems.length = 0;
    currentSelectItems.map(item => {
      this.selectedItems.push(item);
    });


 //   console.log(currentSelectItems);

 //   this.selectedItems.length = 0;

    // console.log(this.selectedItems );
  //  this.selectedItems.length = 0;
    // currentSelectItems.map(item => {
    //
    // });

    // console.log(ITEMS);
    //
    // currentSelectItems.map(item => {
    //   const idx = ITEMS.findIndex(value => +value.id === +item.id);
    //   ITEMS[idx].selected = item.selected;
    // });
    //
    // console.log(ITEMS);
  }
}
