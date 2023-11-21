import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokeApiService } from '../services/poke-api.service';
import { PokeSelectionService } from '../services/poke-selection.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit{

  id_input : string = "";
  name_input : string = "";
  pokemon_list: any = [];
  selected_pokemon_id: any;

  constructor(private api: PokeApiService, private selectionService: PokeSelectionService) {}

  ngOnInit(): void {
    this.retrievePokemonList();
  }  

  /**
   * When pokemon item clicked in the list
   * @param pokemon 
   */
  itemClicked(pokemon: Pokemon) {
    this.selected_pokemon_id = pokemon.id;
    this.updatePokemonDisplayedOnClick();
  }

  /**
   * called when "Go !" clicked
   */
  updatePokemonDisplayedOnClick() {
    this.selectionService.setId(this.selected_pokemon_id); 
  }

  /**
   * retrieves the pokedex from the internet through the api service
   */
  retrievePokemonList() {
    this.api.getPokemons().subscribe((data: any) => {
      this.pokemon_list = data['pokemon_entries']
      .map((p: any) => new Pokemon(
          p['entry_number'], 
          p['pokemon_species']['name']
      ));
    });
  }
}