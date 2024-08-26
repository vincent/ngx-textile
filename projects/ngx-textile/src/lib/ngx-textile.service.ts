import { Injectable } from '@angular/core';
import textile from 'textile-js';

@Injectable({
  providedIn: 'root'
})
export class NgxTextileService {

  parse(input: string) {
    return textile(input)
  }
}
