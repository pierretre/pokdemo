import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'weightConvertKg',
    standalone: false
})
export class WeightConvertKgPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): string {
    return (+value/10).toString() + " kg";
  }
}
