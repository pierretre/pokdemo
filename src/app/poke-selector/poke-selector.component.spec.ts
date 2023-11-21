import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSelectorComponent } from './poke-selector.component';

describe('PokeSelectorComponent', () => {
  let component: PokeSelectorComponent;
  let fixture: ComponentFixture<PokeSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeSelectorComponent]
    });
    fixture = TestBed.createComponent(PokeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
