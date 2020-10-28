import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ArticleService} from '../services/article.service';
import {Article} from '../models/article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
//  article: Observable<Article>;
  title = 'Nazwa artykulu';
//  articles: Observable<Article[]>;

  constructor(private articleService: ArticleService) {}

  getArticles(): void {
    this.articleService.getArticles().subscribe();
  }

  ngOnInit(): void {
 //  this.article = new Observable<Article>();
  }

  clicked(): void {
    console.log('to jest clicked');
  }


}
