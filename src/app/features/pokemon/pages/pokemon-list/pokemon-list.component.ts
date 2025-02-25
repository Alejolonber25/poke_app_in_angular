import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../core/services/pokemon.service';
import { Router } from '@angular/router';
import { Pokemon } from '../../../../core/models/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
  standalone: false
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = []; 

  constructor(private pokemonService: PokemonService, private router: Router){}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
    });
  }

  }
