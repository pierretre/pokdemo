import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Pokemon } from '../models/pokemon';

interface PokeAPIDTO {
  count: number;
  results: Array<PokDTO>;
}

interface PokDTO {
  name: string;
  url: string;
}

interface PokemonDetailsDTO {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: Pokemon['sprites'];
  types: Pokemon['types'];
  stats: Pokemon['stats'];
}

const BASE_URL: string = 'https://pokeapi.co/api/v2';

@Service()
export class PokeApi {
  private readonly http = inject(HttpClient);

  /**
   * @returns list of pokemons
   */
  listPokemons(): Promise<Array<Pokemon>> {
    return lastValueFrom(
      this.http.get<PokeAPIDTO>(`${BASE_URL}/pokemon?limit=100000`)
    ).then((poks: PokeAPIDTO) => {
      return poks.results.map((pok: PokDTO) => {
        const parts = pok.url.split('/');
        const id = parts[parts.length - 2];
        return new Pokemon(id, pok.name);
      });
    });
  }

  /**
   * @param id the id of the pokemon to get informations for
   * @returns Pokemon informations
   */
  getPokemonDetails(id: string): Promise<Pokemon> {
    return lastValueFrom(
      this.http.get<PokemonDetailsDTO>(`${BASE_URL}/pokemon/${id}`)
    ).then(({ id, name, height, weight, sprites, types, stats }: PokemonDetailsDTO) =>
      Object.assign(new Pokemon(String(id), name), { height, weight, sprites, types, stats })
    );
  }
}
