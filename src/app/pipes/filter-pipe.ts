// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], query: string): any[] {
    if (!query) {
      return value; // If no query, return the original array
    }
    query = query.toLowerCase(); // Convert query to lowercase for case-insensitive search
    return (value || []).filter((item: any) =>
      item.text.toLowerCase().includes(query)
    );
  }
}
