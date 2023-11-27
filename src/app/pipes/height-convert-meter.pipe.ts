import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heightConvertMeter'
})
export class HeightConvertMeterPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): string {
    return (+value/10).toString() + " m";
  }
}
