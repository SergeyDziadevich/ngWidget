import { TestBed } from '@angular/core/testing';

import { SelectItemService } from './select-item.service';

describe('SelectItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectItemService = TestBed.get(SelectItemService);
    expect(service).toBeTruthy();
  });
});
