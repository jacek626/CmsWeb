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

  constructor() { }

  ngOnInit(): void {
  //  this.article = this.htt[
  }

}
