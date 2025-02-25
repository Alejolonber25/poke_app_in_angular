import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../../core/models/pokemon.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
  standalone: false,
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigate(['/pokemons', this.pokemon.id], {
      state: { pokemon: this.pokemon },
    });
    }
}
