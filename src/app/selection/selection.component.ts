import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit, OnDestroy {

  @Input() items: Item[];
  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() selectResultItems = new EventEmitter<Item[]>();

  maxSelect = 3;
  public currentSelectItems: Item[] = [];

 // private itemsSub: Subscription;

  constructor() {}

  ngOnInit() {
    this.currentSelectItems = this.items.filter(h => h.selected === true).slice();
  }

  // getItems(): void {
  //   this.itemsSub = this.selectItemService.getItems()
  //     .subscribe(items => this.items = items);
  // }

  onDeleteItem(item) {
   // this.selectItemService.deleteItem(item);
    this.currentSelectItems = this.currentSelectItems.filter(h => h !== item);
    this.items[item.id].selected = false;
  }

  dialogClose() {
    this.closeDialog.emit();
  }

  onCheck(e) {
    if (e.target.checked) {
      this.currentSelectItems.push({ id: +e.target.value, title: `Item ${e.target.value}`, selected: true });
    } else {
      const ind = this.currentSelectItems.findIndex(value => +value.id === +e.target.value);
      this.currentSelectItems.splice(ind, 1);
    }
  }

  saveSelectItem() {
    this.selectResultItems.emit(this.currentSelectItems);
    this.closeDialog.emit();
  }

  cancel() {
    this.closeDialog.emit();
  }

  ngOnDestroy(): void {
   // this.itemsSub.unsubscribe();
  }
}


