import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  // the api url
  url = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  /**
   * @returns an observable on the list of pokemons
   */
  getPokemons(): Observable<any> {
    return this.http.get<any>(this.url + 'pokedex/1');
  } 

  /**
   * @param id, the id of the pokemon to get informations for
   * @returns Pokemon informations
   */
  getPokemonDetails(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url + 'pokemon/' + id);
  }
}
