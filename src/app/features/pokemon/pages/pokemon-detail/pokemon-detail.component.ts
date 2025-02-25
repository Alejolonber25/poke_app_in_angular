import { Component } from '@angular/core';
import { PokemonService } from '../../../../core/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../../../core/models/pokemon.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css',
  standalone: false
})
export class PokemonDetailComponent {

  pokemon!: Pokemon;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private location: Location){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemonById(id).subscribe(pokemon => {
        this.pokemon = pokemon;
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

}
