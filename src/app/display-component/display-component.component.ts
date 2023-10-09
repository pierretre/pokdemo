import { Component, Input, OnInit } from '@angular/core';
import { PokeModel } from '../models/pokeModel';
import { PokeSelectionService } from '../services/poke-selection.service';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent implements OnInit {
  
  model: PokeModel | undefined;

  constructor(private api: PokeApiService, private selectedService: PokeSelectionService) {}
  
  ngOnInit(): void {
    this.selectedService.getObservable().subscribe((value) => this.handleIdChange(value))
  }

  handleIdChange(value: number): void {
    this.api.getPokemonDetails(value).subscribe((data: any) => {
      this.model = data;
      console.log(data)
    });
  }
}