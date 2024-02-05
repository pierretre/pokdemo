import { Component, OnInit } from '@angular/core';
import { PokeModel } from '../models/pokeModel';
import { PokeSelectionService } from '../services/poke-selection.service';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent implements OnInit {
  
  // the Pokemon displayed 
  model: PokeModel | undefined;
  loading: boolean = true;

  // options for echarts radar
  statsOptions: any;

  constructor(private api: PokeApiService, private selectedService: PokeSelectionService) {}
  
  ngOnInit(): void {
    // subscribe to the service observable
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
    this.selectedService.id.subscribe((value) => this.handleIdChange(value))
  }

  /**
   * called when the Observable updates
   * @param value the new value
   */
  handleIdChange(value: number): void {
    this.model = undefined;
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
    if(value !== -1) {  
      this.api.getPokemonDetails(value).subscribe((data: any) => {
        this.model = data;
        this.loading = false;
        this.updateStatisticsRadar();
      });
    }
  }

  updateStatisticsRadar() {
    const stats = this.model?.stats.map((element: { base_stat: number }) => (element.base_stat));
    const indicators = this.model?.stats.map((element: { stat: any }) => ({text: element.stat.name})) 
    
    this.statsOptions = {
      color: ['#3d7dca'],
      radar: {
        indicator: indicators,
        radius: 90,
        startAngle: 90,
        splitNumber: 4,
        axisName: {
          color: '#fff',
          backgroundColor: '#666',
          borderRadius: 3,
          padding: [3, 5]
        },
        splitArea: {
          areaStyle: {
            color: ['#e77f7f', '#d20000', '#e77f7f', '#d20000'],
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)',
            width: 2
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)',
            width: 2
          }
        }
      },
      series: [
        
        {
          type: 'radar',
          data: [
            {
              value: stats,
              name: 'Data C',
              symbol: 'rect',
              symbolSize: 12,
              lineStyle: {
                type: 'dashed'
              },
              label: {
                show: true,
                formatter: function (params: { value: any; }) {
                  return params.value;
                }
              },
              areaStyle: true
            }
          ]
        }
      ]
    };
  }
}
