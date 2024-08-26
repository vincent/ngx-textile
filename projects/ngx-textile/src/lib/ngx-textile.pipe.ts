import { Pipe, PipeTransform } from '@angular/core';
import textile from 'textile-js';

@Pipe({
  name: 'textile',
  standalone: true,
  pure: true
})
export class TextilePipe implements PipeTransform {
  transform(value: string): string {
    return textile(value);
  }
}