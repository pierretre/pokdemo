import { Component } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';
import { PokeSelectionService } from '../services/poke-selection.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-poke-selector',
  templateUrl: './poke-selector.component.html',
  styleUrls: ['./poke-selector.component.css']
})
export class PokeSelectorComponent {

  id_input : string = "";
  name_input : string = "";
  pokemon_list: any = [];
  selected_pokemon_id: any;

  constructor(private api: PokeApiService, private selectionService: PokeSelectionService) {}

  ngOnInit(): void {
    this.retrievePokemonList();
  }  

  /**
   * called when "Go !" clicked
   */
  handleClick() {
    this.selectionService.setId(this.selected_pokemon_id); 
  }

  /**
   * retrieves the pokedex from the internet through the api service
   */
  retrievePokemonList() {
    this.api.getPokemons().subscribe((data: any) => {
      this.pokemon_list = data['pokemon_entries'].map((p: any) => new Pokemon(p['entry_number'], p['pokemon_species']['name']));
    });
  }
}
