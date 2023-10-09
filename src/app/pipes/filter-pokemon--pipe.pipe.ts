import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(value: any[], property?: string, searchString?: string): any {
    if (typeof value !== 'undefined') {
      return value.filter((e) => e[property!].toString().toLowerCase().indexOf(searchString?.toLowerCase()) !== -1 || searchString?.length == 0);
    } else {
      return [];
    }
  }
}
