import { Service, inject, linkedSignal, resource, signal } from '@angular/core';
import { PokeApi } from './poke-api';

@Service()
export class PokedexStore {
  private readonly api = inject(PokeApi);

  readonly pokedex = resource({
    loader: () => this.api.listPokemons(),
    defaultValue: [],
  });

  readonly search = signal('');
  private readonly _selectedId = linkedSignal(() => this.pokedex.value()[0]?.id);
  readonly selectedId = this._selectedId.asReadonly();

  readonly selectedPokemon = resource({
    params: () => this.selectedId(),
    loader: ({ params: id }) => this.api.getPokemonDetails(id),
  });

  /**
   * changes the selected pokemon
   * @param id the id of the pokemon to select
   */
  select(id: string): void {
    this._selectedId.set(id);
  }
}
