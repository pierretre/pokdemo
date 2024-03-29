import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightConvertKg'
})
export class WeightConvertKgPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): string {
    return (+value/10).toString() + " kg";
  }
}
