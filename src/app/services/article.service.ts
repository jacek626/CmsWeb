import { Injectable } from '@angular/core';

import {Article} from '../models/article';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url = 'http://localhost:8080/cms/articles';

  constructor(private http: HttpClient) {}

 getArticles(): Observable<Article[]> {
   // return this.http.get<Article[]>(this.url);
    return this.http.get<Article[]>(this.url).pipe(tap(console.log));
  }

}

