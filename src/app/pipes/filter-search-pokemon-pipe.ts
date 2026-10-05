import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'filterPokemonPipe',
})
export class FilterPokemonPipe implements PipeTransform {

  /**
   * @param pokes the list to filter
   * @param searchStr the string to search in the pokemons' name or id
   * @returns the pokemons matching searchStr / the initial list if searchStr is empty
   */
  transform(pokes: Array<Pokemon> | undefined, searchStr: string | undefined): Array<Pokemon> {
    if (pokes === undefined) {
      return [];
    }

    if (searchStr === undefined || searchStr.trim().length === 0) {
      return pokes;
    }

    const search = searchStr.trim().toLowerCase();
    return pokes.filter(poke => poke.name.toLowerCase().includes(search) || poke.id.includes(search));
  }
}
