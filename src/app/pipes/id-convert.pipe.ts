import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idConvert'
})
export class IdConvertPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): string {
    return value.toString().padStart(4, '0');
  }
}
