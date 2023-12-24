import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPokemonPipe } from './pipes/filter-search-pokemon.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PokeApiService } from './services/poke-api.service';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { PokeSelectionService } from './services/poke-selection.service';
import { WeightConvertKgPipe } from './pipes/weight-convert-kg.pipe';
import { HeightConvertMeterPipe } from './pipes/height-convert-meter.pipe';
import { IdConvertPipe } from './pipes/id-convert.pipe';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    FilterPokemonPipe,
    DisplayComponentComponent,
    WeightConvertKgPipe,
    HeightConvertMeterPipe,
    IdConvertPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts,
    })
  ],
  providers: [
    PokeApiService,
    PokeSelectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
