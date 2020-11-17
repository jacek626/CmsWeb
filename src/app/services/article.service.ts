import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Article} from '../models/article';
import {Pagination} from '../models/pagination';



@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) {}

 getArticles(): Observable<Pagination<Article>> {
    return this.http.get<Pagination<Article>>(environment.api + 'articles').pipe(tap(console.log));
  }

  getArticle(id: string): Observable<Article> {
    return this.http.get<Article>(environment.api + 'article/' + id).pipe(tap(console.log));
  }

}

