import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

import { Item } from '../item';
import { SelectItemService } from '../select-item.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit, OnDestroy {

  @Input() items: Item[];
  // @Input() startSelectItems: Item[];
  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() selectResultItems = new EventEmitter<Item[]>();

  public currentSelectItems: Item[] = [];

 // private itemsSub: Subscription;

  constructor(private selectItemService: SelectItemService) {}

  ngOnInit() {
    // this.getItems();
    // this.currentSelectItems = this.items.filter(h => h.selected === true);
    // this.currentSelectItems = this.startSelectItems.slice();
    this.currentSelectItems = this.items.filter(h => h.selected === true).slice();
  }

  // getItems(): void {
  //   this.itemsSub = this.selectItemService.getItems()
  //     .subscribe(items => this.items = items);
  // }

  delete(item) {
    this.currentSelectItems = this.currentSelectItems.filter(h => h !== item);
    this.items[item.id].selected = false;

    console.log(this.items);

    this.selectItemService.delete(item);
  }

  dialogClose() {
    this.closeDialog.emit();
  }

  onCheck(e) {
    if (e.target.checked) {
      this.currentSelectItems.push({ id: +e.target.value, title: 'Item', selected: true });
    } else {
      const ind = this.currentSelectItems.findIndex(value => +value.id === +e.target.value);
      this.currentSelectItems.splice(ind, 1);
    }
  }

  saveSelectItem() {
   // console.log(this.currentSelectItems);

    this.selectResultItems.emit(this.currentSelectItems);

    //  this.closeDialog.emit();

    // const selected = this.items.filter(c => c.selected);
    //
    // this.selectItemService.selectedItems.length = 0;
    //
    // selected.map((item) => {
    //   this.selectItemService.selectedItems.push(item);
    // });
   //  this.selectItemService.selectedItems = Array.from(this.currentSelectItems);
   //  this.selectItemService.selectedItems = this.currentSelectItems.slice();


  }

  cancel() {
    this.closeDialog.emit();
  }

  ngOnDestroy(): void {
   // this.itemsSub.unsubscribe();
  }

  // getSelectedItem() {
  //   const selected = this.items.filter(c => c.selected);
  //   console.log(selected);
  //
  //   this.onClose.emit(false);
  // }
}


