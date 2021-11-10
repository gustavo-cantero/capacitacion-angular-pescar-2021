import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent {
  data: Object | undefined;
  loading: boolean = false;
  error: Object | undefined;
  // dataArray: Array<any> = [];

  constructor(private http: HttpClient) { }

  makeRequest(url: string): void {
    this.loading = true;
    this.data = this.error = undefined;
    this.http
      .get(url)
      .subscribe(
        data => {
          this.data = data;
          // this.dataArray = data as Array<any>;
          this.loading = false;
        },
        err => {
          this.error = err;
          this.loading = false;
        });
  }
}
