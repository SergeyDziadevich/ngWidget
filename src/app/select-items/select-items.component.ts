import { Component, OnInit } from '@angular/core';

import { SelectItemService } from '../select-item.service';

import { Item } from '../item';

@Component({
  selector: 'app-select-items',
  templateUrl: './select-items.component.html',
  styleUrls: ['./select-items.component.scss']
})
export class SelectItemsComponent implements OnInit {

  items: Item[];

  constructor(private selectItemService: SelectItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.selectItemService.getSelectedItems()
      .subscribe(items => this.items = items);
  }

  delete(item) {
    this.items = this.items.filter(h => h !== item);
    this.selectItemService.delete(item);
  }
}
