import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPokemonPipePipe } from './pipes/filter-pokemon--pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PokeApiService } from './services/poke-api.service';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { PokeSelectionService } from './services/poke-selection.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    FilterPokemonPipePipe,
    DisplayComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    PokeApiService,
    PokeSelectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
