import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleValueService {

  value: string = 'Test de objeto inyectable'
}
