import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase1, lo mejor!';
  pulso = false;
  colorBg = 'red';
  fontSize = 20;
  cities = ['Neuquén', 'Buenos Aires', 'Bariloche', 'Mar de Ajó']
  peopleByCity = [
    {
      city: 'Buenos Aires',
      people: [
        {
          name: 'Juan',
          age: 20
        },
        {
          name: 'Lucía',
          age: 14
        }
      ]
    },
    {
      city: 'Bariloche',
      people: [
        {
          name: 'Julieta',
          age: 14
        },
        {
          name: 'Marianela',
          age: 45
        }
      ]
    }
  ]

  prueba(): void {
    if (!this.pulso) {
      this.cities.push('Viedma');
    }
    this.title = 'pulsaste el botón';
    this.pulso = true;
    this.colorBg = 'yellow';
    //this.fontSize = this.fontSize + 1;
    this.fontSize++;
  }
}
