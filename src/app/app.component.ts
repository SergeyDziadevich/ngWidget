import {Component, OnInit} from '@angular/core';
import {SelectItemService} from './select-item.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Item} from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'widget';

  selectedItems;
  items$: Observable<Item[]>;

  private visibleSelection = true;

  constructor(private selectItemService: SelectItemService) {}

  ngOnInit() {
    // this.selectedItems$ = this.selectItemService.getItems().pipe(
    //   map(items => items.filter(item => item.selected)),
    // );
    this.items$ = this.selectItemService.getItems();
    this.getSelectedItems();
  }

  getSelectedItems() {
    this.selectItemService.getSelectedItems()
      .subscribe(items => this.selectedItems = items);
  }

  selectResultItems(currentSelectItems) {
    this.selectItemService.setSelectItems(currentSelectItems);
  }

  showSelection(): void {
    this.visibleSelection = !this.visibleSelection;
  }

  closeDialog(): void {
    this.visibleSelection = false;
  }
}
