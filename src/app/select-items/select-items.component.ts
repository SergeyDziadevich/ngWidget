import {Component, Input, OnInit} from '@angular/core';

import { Item } from '../item';
import {SelectItemService} from '../select-item.service';

@Component({
  selector: 'app-select-items',
  templateUrl: './select-items.component.html',
  styleUrls: ['./select-items.component.scss']
})
export class SelectItemsComponent implements OnInit {
  @Input() items: Item[];
  private currentSelectItems: Item[] = [];

  constructor(private selectItemService: SelectItemService) {}

  ngOnInit() {
    // this.selectedItems$ = this.selectItemService.getItems().pipe(
    //   map(items => items.filter(item => item.selected)),
    // );
    this.getSelectedItems();
  }

  getSelectedItems(): void {
    this.selectItemService.getSelectedItems()
      .subscribe(items => this.currentSelectItems = items);
  }

  onDeleteItem(item) {
    this.selectItemService.deleteItem(item);
    this.getSelectedItems();
  }
}
