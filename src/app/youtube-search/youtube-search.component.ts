import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.description = obj && obj.description || null;
    this.thumbnailUrl = obj && obj.thumbnailUrl || null;
    this.videoUrl = obj && obj.videoUrl ||
      `https://www.youtube.com/watch?v=${this.id}`;
  }
}

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {
  http: Http;
  data: Object;
  loading: boolean;


  YOUTUBE_API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
  YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/sear\ch';
  // loadingGif: string = ((<any>window).__karma__) ? '' : require('images/loading.gif');

  constructor(http: Http) {
    this.http = http;

    var searchResults = this.search("car");
    console.log(searchResults);
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  ngOnInit() {
  }

  search(query: string): Observable<SearchResult[]> {
    let params: string = [
      `q=${query}`,
      `key=${this.YOUTUBE_API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    let queryUrl: string = `${this.YOUTUBE_API_URL}?${params}`;
    var response = this.http.get(queryUrl)
                            .map((response: Response) => console.log(response));
    
    return null;
    // return this.http.get(queryUrl)
    //   .map((response: Response) => {
    //     return (<any>response.json()).items.map(item => {
    //       // console.log("raw item", item); // uncomment if you want to debug
    //       return new SearchResult({
    //         id: item.id.videoId,
    //         title: item.snippet.title,
    //         description: item.snippet.description,
    //         thumbnailUrl: item.snippet.thumbnails.high.url
    //       });
    //     });
    //   });
  }



}
