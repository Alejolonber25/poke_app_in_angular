import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonService } from '../../core/services/pokemon.service';
import { PokemonRepository } from '../../core/repositories/pokemon.repository';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { CapitalizePipe } from '../../core/pipes/capitalize.pipe';
import { LimitListPipe } from '../../core/pipes/limitList.pipe';


@NgModule({
  declarations: [
    CapitalizePipe,
    LimitListPipe,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
  ],
  providers: [PokemonService, PokemonRepository ]
})
export class PokemonModule { }