import { Injectable } from '@angular/core';

import {Article} from '../models/article';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) {}

 getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(environment.api + 'articles').pipe(tap(console.log));
  }

}

