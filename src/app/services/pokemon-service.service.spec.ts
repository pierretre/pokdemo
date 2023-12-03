import { TestBed } from '@angular/core/testing';

import { PokeSelectionService } from './poke-selection.service';

describe('PokeSelectionService', () => {
  let service: PokeSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
