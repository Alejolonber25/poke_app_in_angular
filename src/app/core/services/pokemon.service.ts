import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { forkJoin } from 'rxjs';
import { PrePokemon, Pokemon } from '../models/pokemon.interface';
import { PokemonRepository } from '../repositories/pokemon.repository';

@Injectable()
export class PokemonService {

  constructor(readonly pokemonRepository: PokemonRepository) {}

  getPokemons(limit: number = 10): Observable<Pokemon[]> {
    return this.pokemonRepository.getPokemons(limit).pipe(
      switchMap(prePokemons => forkJoin(prePokemons.map(p => this.pokemonRepository.getPokemonByUrl(p.url))))
    );
  }

  getPokemonById(id: string): Observable<Pokemon> {
    return this.pokemonRepository.getPokemonById(id);
  }
}
