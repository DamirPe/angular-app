import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'filterTowns'
})

export class TownFilter implements PipeTransform {
    transform(value: any[], countryFilter: string): any[] {
        if (!value || value.length === 0 || !countryFilter) {
            return value;
        }
        
        const townsFiltered = [];
        for (const item of value) {
            if (item.parentId === countryFilter) {
                townsFiltered.push(item);
            }
        }
        return townsFiltered;
    }
}