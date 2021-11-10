import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    input { border-radius: 3px; border: 1px solid; margin: 10px; }
    input.has-error { border: 1px solid red; }
    input.complete { border: 1px solid green; }
  `]
})
export class AppComponent implements OnInit {
  title = 'clase3';
  myform: FormGroup;

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required])
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(4)])
    });
  }

  send() {
    if (!this.myform.valid)
      alert('Por favor, verifique los datos cargados');
    else
      alert('¡Enviando!');
  }
}
