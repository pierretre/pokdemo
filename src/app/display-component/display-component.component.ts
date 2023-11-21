import { Component, OnInit } from '@angular/core';
import { PokeModel } from '../models/pokeModel';
import { PokeSelectionService } from '../services/poke-selection.service';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent implements OnInit {
  
  // the Pokemon displayed 
  model: PokeModel | undefined;

  constructor(private api: PokeApiService, private selectedService: PokeSelectionService) {}
  
  ngOnInit(): void {
    // subscribe to the service observable
    this.selectedService.getId().subscribe((value) => this.handleIdChange(value))
    // TODO

    this.selectedService.setId(1);
  }

  /**
   * called when the Observable updates
   * @param value the new value
   */
  handleIdChange(value: number): void {
    if(value !== -1) {
      this.api.getPokemonDetails(value).subscribe((data: any) => {
        this.model = data;
      });
    }
  }
}