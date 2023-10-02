import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './pipes/filter-pokemon--pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    FilterPokemonPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
