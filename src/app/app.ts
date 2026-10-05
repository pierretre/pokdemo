import { Component } from '@angular/core';
import { Display } from './display/display';
import { SearchPokemon } from './search-pokemon/search-pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    Display,
    SearchPokemon
  ]
})
export class App {
  protected readonly title = 'Pokedex';
}
