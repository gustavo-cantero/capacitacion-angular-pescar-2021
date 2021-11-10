import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SearchResultModel } from './search-result.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: SearchResultModel[];
  query: string;
  public hasChange = false;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.route
      //.queryParams
      .params
      .subscribe(params => { this.query = params['query'] || null; });
  }

  ngOnInit() {
    this.search();
  }

  search() {
    const queryUrl = `https://www.googleapis.com/books/v1/volumes?q=title:${this.query}`;
    this.results = [];

    this.http.get(queryUrl).forEach((response: any) =>
      response.items.map((item: any) => {
        let id: string = '';
        if (item.volumeInfo.industryIdentifiers?.length > 0)
          id = item.volumeInfo.industryIdentifiers[0].identifier;

        this.results.push(new SearchResultModel(
          id,
          item.volumeInfo.title,
          item.volumeInfo.author ? item.volumeInfo.author[0] : ''
        ));
      })
    );
  }

  moveToSearch(query: string) {
    this.hasChange = false;

    // this.router.navigate(['search'], { queryParams: { query: query } })
    // this.router.navigate(['search', query])
    // this.router.navigate(['search', { query: query }])
    //   .then(() => this.search());
    this.router.navigate(['books', query])
      .then(() => this.search());
  }
}
