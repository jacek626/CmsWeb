import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Article} from '../shared/interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Observable<Article>;
  article2 = { id: 5, title: 'to jest title', content: 'to jest content', rating: 3 } ;
  title = 'Nazwa artykulu';
  dog = { name: 'reksio' };
  articles: Article[] = [ { id: 5, title: 'to jest title', content: 'to jest content', rating: 3 },
    { id: 6, title: 'to jest title  6', content: 'to jest content 6', rating: 4 },
    { id: 7, title: 'to jest title 7', content: 'to jest content 8', rating: 6 }];

  constructor() { }

  ngOnInit(): void {
   this.article = new Observable<Article>();

  }

  get footer(): string {
    return 'fff';
  }

  getArticle2(): Article {
    return this.article2;
  }

  clicked(): void {
    console.log('to jest clicked');
  }


}
