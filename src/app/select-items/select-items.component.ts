import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import { Item } from '../entites/item';
import {SelectItemService} from '../select-item.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-select-items',
  templateUrl: './select-items.component.html',
  styleUrls: ['./select-items.component.scss']
})
export class SelectItemsComponent implements OnInit, OnDestroy {
  @Input() items: Item[];
  public  currentSelectItems: Item[] = [];
  private sub: Subscription;

  constructor(private selectItemService: SelectItemService) {}

  ngOnInit() {
    // this.selectedItems$ = this.selectItemService.getItems().pipe(
    //   map(items => items.filter(item => item.selected)),
    // );
    this.getSelectedItems();
  }

  getSelectedItems(): void {
    this.sub = this.selectItemService.getSelectedItems()
      .subscribe(items => this.currentSelectItems = items);
  }

  onDeleteItem(item) {
    this.selectItemService.deleteItem(item);
    this.getSelectedItems();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
