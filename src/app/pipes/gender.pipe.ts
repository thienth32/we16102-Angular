import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: number): string {
    let gender = ''
    switch(value){
      case 1:
        gender = 'Nam';
        break;
      case 2: 
        gender = 'Nữ';
        break;
      default: 
        gender = 'Khác';
        break;
    }
    return gender
  }

}
