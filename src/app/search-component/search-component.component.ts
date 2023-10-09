import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokeApiService } from '../services/poke-api.service';
import { PokeModel } from '../models/pokeModel';
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
  selected_pokemon: Pokemon | undefined;

  constructor(private api: PokeApiService, private seclectionService: PokeSelectionService) {}

  ngOnInit(): void {
    this.retrievePokemonList();
  }  

  handleClick() {
    console.log("pokemon sélectionné: "+this.selected_pokemon?.nom)
    
    if(this.selected_pokemon != undefined)
    {
      this.seclectionService.setId(+this.selected_pokemon.id)
    } 
  }

  onSelection(evt: Event) {
    console.log("onSelect : "+evt);
    // this.seclectionService.setId(id); 
  }

  retrievePokemonList() {
    this.api.getPokemons().subscribe((data: any) => {
      this.pokemon_list = data['pokemon_entries'].map((p: any) => new Pokemon(p['entry_number'], p['pokemon_species']['name']));
    });
  }
}