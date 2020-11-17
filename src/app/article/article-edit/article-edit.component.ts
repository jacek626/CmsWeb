import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Article} from '../../models/article';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  id: string;
  form: FormBuilder;


  constructor(private articleService: ArticleService, private route: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  //  this.form.pa
  //  this.articleService.getArticle(this.id).subscribe(response => this.form.)
  }

}
