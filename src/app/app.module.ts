import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PokemonModule } from './features/pokemon/pokemon.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CapitalizePipe } from './core/pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
