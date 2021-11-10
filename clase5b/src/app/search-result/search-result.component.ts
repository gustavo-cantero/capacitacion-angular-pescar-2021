import { Component, Input, OnInit } from '@angular/core';
import { SearchResultModel } from '../you-tube-search/search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() result: SearchResultModel | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
