import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[]): any[] {
    if (!value || value.length === 0) {
      return value;
    }
    return value.sort((a, b) => b.population - a.population);

  }

}
