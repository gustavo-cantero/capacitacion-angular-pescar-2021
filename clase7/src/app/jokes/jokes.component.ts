import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit, AfterViewInit, AfterContentInit {

  //@ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild('header') headerEl: ElementRef;
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

  jokes = [
    '¿Qué pasa cuando una variable tiene a infinito\nInfinito se seca.',
    'Es bien difícil bromear con un cleptómano\nSiempre toman las cosas literalmente',
    'El gato de Schrödinger entra a un bar\nY no entra'
  ];

  constructor() { }

  ngAfterViewInit(): void {
    // console.log(
    //   `ngAfterViewInit - jokeViewChild es ${this.jokeViewChild}`
    // );
    let jokes2: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes2);

    console.log(
      `ngAfterViewInit - headerEl es ${this.headerEl?.nativeElement?.innerText}`
    );

    this.headerEl.nativeElement.innerText = 'Chistes malos';
  }

  ngAfterContentInit(): void {
    console.log('jokeContentChild: ');
    console.log(this.jokeContentChild?.joke);
  }

  ngOnInit(): void {

  }
}
