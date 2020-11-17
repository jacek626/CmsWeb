import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {Pagination} from '../../models/pagination';



@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public articles: Article[];
  public last: boolean;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
     this.articleService.getArticles().subscribe((result: Pagination<Article>) => {
       this.articles = result.content;
     });
  }
  /*  this.articleService.getArticles()
      .subscribe(( articles: Article[]) => {
        this.articles = articles;
      }
    );*/

/*  getArticles(): Article[] {
     return this.articles;
  }*/

}
