import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {
  id_input : string = "";
  pokemon_list = [
    new Pokemon("1", "poke1"),
    new Pokemon("2", "poke2"),
    new Pokemon("3", "poke3"),
    new Pokemon("4", "poke4"),
    new Pokemon("5", "poke5"),
  ];

  selected_pokemon: any;

  handleClick() {
    console.log("pokemon sélectionné: "+this.selected_pokemon.nom)
  }
}
