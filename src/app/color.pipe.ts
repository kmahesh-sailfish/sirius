import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "color"
})
export class ColorPipe implements PipeTransform {
  transform(index: number): any {
    switch (index) {
      case 0:
        return "#0D7E88";
      case 1:
        return "#D09378";
      case 2:
        return "#405B5D";
      default:
        return "#74A748";
    }
  }
}
