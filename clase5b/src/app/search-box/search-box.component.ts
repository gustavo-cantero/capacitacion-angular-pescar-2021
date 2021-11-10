import { Component, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, switchAll } from 'rxjs/operators';
import { YouTubeSearchService } from '../you-tube-search.service';
import { SearchResultModel } from '../you-tube-search/search-result.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() results: EventEmitter<SearchResultModel[]> = new EventEmitter<SearchResultModel[]>();

  constructor(
    private el: ElementRef,
    private youtube: YouTubeSearchService
  ) { }

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      //Obtiene el valor del input
      map((e: any) => e.target.value),
      //Filtra los valores con menos de 3 caracteres
      filter((text: string) => text.length > 3),
      //No se ejecuta en menos de 250ms
      debounceTime(250),
      //Hacemos la búsqueda utilizando nuestro servicio
      map((query: string) => this.youtube.search(query)),
      //Descartamos los valores viejos (si hay)
      switchAll()
      //Trabajamos con los resultados
    ).subscribe(
      resultsFromYT => this.results.emit(resultsFromYT)
    );
  }
}
