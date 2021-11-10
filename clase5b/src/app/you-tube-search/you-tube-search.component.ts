import { Component, OnInit } from '@angular/core';
import { SearchResultModel } from './search-result.model';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {
  results: SearchResultModel[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  updateResults(results: SearchResultModel[]) {
    this.results = results;
  }
}
