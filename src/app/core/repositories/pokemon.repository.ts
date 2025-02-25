import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrePokemon, Pokemon } from '../models/pokemon.interface';


@Injectable({
  providedIn: 'root', // Esto hace que el servicio sea accesible en toda la aplicación
})
export class PokemonRepository {
  private readonly url ? = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { }

  getPokemons(limit: number = 10): Observable<PrePokemon[]> {
    return this.http.get<{ results: PrePokemon[] }>(`${this.url}?limit=${limit}`).pipe(
      map(response => response.results)
    );
  }

  getPokemonByUrl(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  getPokemonById(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}/${id}`);
  }
}
