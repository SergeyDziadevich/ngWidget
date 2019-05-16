import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from '../entites/item';
import * as _ from 'lodash';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  @Input() items: Item[];
  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() selectResultItems = new EventEmitter<Item[]>();

  private maxSelect = 3;
  public currentSelectItems: Item[] = [];

  constructor() {}

  ngOnInit() {
    this.currentSelectItems = this.items.filter(h => h.selected);
  }

  onDeleteItem(item) {
    this.currentSelectItems = this.currentSelectItems.filter(h => h !== item);
    this.items[item.id].selected = false;
  }

  dialogClose() {
    this.closeDialog.emit();
  }

  onCheck(e) {
    if (e.target.checked) {
      const item = _.find(this.items, { id: +e.target.value });
      this.currentSelectItems.push(item);
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
}


