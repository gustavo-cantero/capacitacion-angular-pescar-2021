import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-more-http-requests',
  templateUrl: './more-http-requests.component.html',
  styleUrls: ['./more-http-requests.component.css']
})
export class MoreHttpRequestsComponent {
  loading = false;
  data: any = '';

  constructor(private http: HttpClient) { }

  makePost() {
    this.data = '';
    this.loading = true;
    this.http.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        body: 'Scientia',
        title: 'foo',
        userId: 1
      }
    ).subscribe(
      data => {
        this.data = data;
        this.loading = false;
      }
    )
  }

  makeDelete() {
    this.data = '';
    this.loading = true;
    this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      })
  }

  makeHeaders() {
    this.data = '';
    const customHeaders = new HttpHeaders({
      'X-API-TOKEN': 'SCIENTIA'
    });

    const req = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        headers: customHeaders
      }
    );

    this.http.request(req).subscribe((data: any) => this.data = data.body);
  }
}
