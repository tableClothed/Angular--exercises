import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: number, digit= 2): any {
    return value.toFixed(digit);
  }

}
