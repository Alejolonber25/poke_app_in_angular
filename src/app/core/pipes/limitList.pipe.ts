import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'limitList',
  standalone: false
})
export class LimitListPipe implements PipeTransform {
  transform(list: any[], limit: number, showAll: boolean): any[] {
    return showAll ? list : list.slice(0, limit);
  }
}