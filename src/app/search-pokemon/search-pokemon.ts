import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FilterPokemonPipe } from '../pipes/filter-search-pokemon-pipe';
import { IdConvertPipe } from '../pipes/id-convert-pipe';
import { PokedexStore } from '../services/pokedex-store';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.html',
  styleUrls: ['./search-pokemon.css'],
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    FilterPokemonPipe,
    IdConvertPipe,
  ]
})
export class SearchPokemon {
  protected readonly store = inject(PokedexStore);
}
