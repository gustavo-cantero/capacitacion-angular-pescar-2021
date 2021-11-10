import { Component, Inject } from '@angular/core';
import { SimpleValueService } from './simple-value.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    @Inject('TITLE') public title: string,
    public service: SimpleValueService) {
  }

  //Fat Arrow
  miPropiedad = "Hola";
  ejemFatArrow() {
    setTimeout(() => {
      console.log(this.miPropiedad);
    }, 1000);
  }

  //Destructuring
  ejemDestructuring() {
    const obj = { nombre: 'Gustavo', apellido: 'Cantero' };
    const n = obj.nombre;
    const a = obj.apellido;
    console.log(n);
    console.log(a);

    //Con destructuring
    const { nombre: n2, apellido: a2 } = obj;
    console.log(n2);
    console.log(a2);

    //Con destructuring
    const { nombre, apellido } = obj;
    console.log(nombre);
    console.log(apellido);
  }

  //Array Destructuring
  ejemArrayDestructuring() {
    const arr = ['a', 'b'];
    // const x = arr[0];
    // const y = arr[1];
    const [x, y] = arr;
    console.log(x);
    console.log(y);
  }

  //Function Destructuring
  ejemFunctionDestructuring() {
    const ejemplo = new opt();
    ejemplo.x = 1;
    ejemplo.y = 2;
    this.f1(ejemplo);
    this.f2(ejemplo);
    this.f3(new opt());
  }
  f1(options: opt) {
    console.log(options.x);
  }
  f2({ x }: opt) {
    console.log(x);
  }
  f3({ x = 0 }: opt) {
    console.log(x);
  }

  //For Each
  ejemForEach() {
    //Con JS
    let array = [1, 2, 3];
    for (let i = 0; i < array.length; i++)
      console.log(array[i]);

    array.forEach(function (value) {
      console.log(value);
    })

    array.forEach(value => console.log(value));
  }

  //For In
  ejemForIn() {
    let array = [10, 20, 30];
    for (var index in array)
      console.log(index);

    let obj = { a: 1, b: 2 };
    for (var prop in obj)
      console.log(prop);
  }

  //For Of
  ejemForOf() {
    let array = [10, 20, 30];
    for (var value of array)
      console.log(value);
  }

  ejemPromise() {
    doAsyncTask()
      .then(
        val => console.log("Valor: " + val),
        //err => console.log("Error: " + err)
      )
      .catch(ex => console.log(ex))
      .finally(() => console.log("Finally"));
  }
}

//Para Function Destructuring
class opt {
  x: number;
  y: number;
}

//Promise
function doAsyncTask() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //Hacemos el trabajo de forma asíncrona
      console.log("¡Trabajo completo!");
      const error = Math.round(Math.random()) > .5;
      if (error)
        reject('Error no contemplado');
      else
        resolve('Resultado');
    }, 1000);
  });
  return promise;
}