import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  thumbnailUrl: string;
  title: string;
  author: string;
  isbn: string;
  description: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {
    //Obtener el parámetro que me envían por la ruta
    this.route
      .params
      .subscribe(params => {
        this.isbn = params['isbn'];

        //Busco la info del libro a través del ISBN
        const queryUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${this.isbn}`;

        this.http.get(queryUrl).forEach((response: any) => {
          const item: any = response.items[0];

          this.title = item.volumeInfo.title;
          this.thumbnailUrl = item.volumeInfo.imageLinks.thumbnail;
          this.description = item.volumeInfo.description;
          if (item.volumeInfo.authors)
            this.author = item.volumeInfo.authors[0];
        })
      });
  }

}
