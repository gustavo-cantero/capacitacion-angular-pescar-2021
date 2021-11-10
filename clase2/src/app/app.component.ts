import { Component } from '@angular/core';
import { PersonModel } from './models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase2';
  people: PersonModel[] = [];

  add(paramName: string, paramAddress: string, paramPhone: string) {
    this.people.push({
      name: paramName,
      address: paramAddress,
      phone: paramPhone
    });
  }

  delete(person: PersonModel) {
    this.people = this.people.filter(p => p != person);
  }
}
