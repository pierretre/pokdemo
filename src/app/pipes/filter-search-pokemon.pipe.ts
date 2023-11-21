import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipe implements PipeTransform {

  /**
   * @param value the list to filter  
   * @param property the property to filter on
   * @param searchString the string to filter property on 
   * @returns the list filtered to a certain property and string value / the initial list if the search string is empty
   */
  transform(value: any[], property?: string, searchString?: string): any {
    if (typeof value !== 'undefined') {
      return value.filter((e) => e[property!].toString().toLowerCase().indexOf(searchString?.toLowerCase()) !== -1 || searchString?.length == 0);
    } else {
      return [];
    }
  }
}
