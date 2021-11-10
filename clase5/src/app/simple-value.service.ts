import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleValueService {

  value: string = 'TEST';

  constructor() { }
}
