import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  url = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  /**
   * @param param 
   * @returns the list of pokemons
   */
  getPokemons(): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url + 'pokedex/1');
  } 

  /**
   * @param id 
   * @returns Pokemon informations
   */
  getPokemonDetails(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url + 'pokemon/' + id);
  }
}
