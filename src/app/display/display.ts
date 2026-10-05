import { Component, computed, inject } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
import { Pokemon } from '../models/pokemon';
import { PokedexStore } from '../services/pokedex-store';
import { HeightConvertMeterPipe } from '../pipes/height-convert-meter-pipe';
import { WeightConvertKgPipe } from '../pipes/weight-convert-kg-pipe';
import { IdConvertPipe } from '../pipes/id-convert-pipe';

@Component({
  selector: 'app-display',
  templateUrl: './display.html',
  styleUrls: ['./display.css'],
  imports: [
    NgxEchartsDirective,
    HeightConvertMeterPipe,
    WeightConvertKgPipe,
    IdConvertPipe
  ]
})
export class Display {

  // the Pokemon displayed
  protected readonly pokemon = inject(PokedexStore).selectedPokemon;

  protected readonly statsOptions = computed(() => {
    const p = this.pokemon.value();
    return p ? this.updateStatisticsRadar(p.stats) : {};
  });

  updateStatisticsRadar(stats: Pokemon['stats']): EChartsOption {
    const indicators = stats.map((element: { stat: any }) => ({ text: element.stat.name }))

    return {
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
              value: stats.map((s) => s.base_stat),
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
              areaStyle: {}
            }
          ]
        }
      ]
    };
  }
}
