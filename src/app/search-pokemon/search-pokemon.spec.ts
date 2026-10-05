import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokemon } from './search-pokemon';

describe('SearchPokemon', () => {
  let component: SearchPokemon;
  let fixture: ComponentFixture<SearchPokemon>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPokemon]
    });
    fixture = TestBed.createComponent(SearchPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
