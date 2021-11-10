import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResultModel } from './you-tube-search/search-result.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YouTubeSearchService {

  constructor(
    private http: HttpClient,
    @Inject('YOUTUBE_API_KEY') private apiKey: string
  ) { }

  search(query: string): Observable<SearchResultModel[]> {
    const params = `q=${query}&key=${this.apiKey}&part=snippet&type=video&maxResults=10`;
    const queryUrl = `https://www.googleapis.com/youtube/v3/search?${params}`;

    return this.http.get(queryUrl).pipe(
      map((response: any) => {
        return response['items'].map((item: any) => {
          return new SearchResultModel({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      })
    );
  }
}
