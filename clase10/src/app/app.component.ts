import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase10';

  constructor() {
    var x: any = null;
    //x.test(); //Generamos un error
  }
}
