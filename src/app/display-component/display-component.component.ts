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
  loading: boolean = true;

  constructor(private api: PokeApiService, private selectedService: PokeSelectionService) {}
  
  ngOnInit(): void {
    // subscribe to the service observable
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
    this.selectedService.id.subscribe((value) => this.handleIdChange(value))
  }

  /**
   * called when the Observable updates
   * @param value the new value
   */
  handleIdChange(value: number): void {
    this.model = undefined;
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
    if(value !== -1) {  
      this.api.getPokemonDetails(value).subscribe((data: any) => {
        this.model = data;
        this.loading = false;
      });
    }
  }
}
