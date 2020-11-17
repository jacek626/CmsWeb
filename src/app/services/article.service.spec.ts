import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {Article} from '../models/article';
import {environment} from '../../environments/environment';
import {Pagination} from '../models/pagination';

describe('ArticleService', () => {
  let articleService: ArticleService;
  let httpTestingController: HttpTestingController;

  const articles: Article[] = [
    // tslint:disable-next-line:max-line-length
    { id: 1, title: 'Article 1', content: 'Article 1 content', categoryId: 10, userId: 20, creationDate: '01-01-2020', ratingsPositive: 0, ratingsNegative: 0}
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientTestingModule, HttpClientModule, ArticleService]
    });
    articleService = TestBed.inject(ArticleService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(articleService).toBeTruthy();
  });
  it('should get all articles', () => {
    articleService.getArticles().subscribe((data: Pagination<Article>) => {
      expect(data.content.length).toBe(1);
    });

    const articleRequest: TestRequest = httpTestingController.expectOne(environment.api + 'articles');
    expect(articleRequest.request.method).toEqual('GET');
    articleRequest.flush(articles);

    httpTestingController.verify();
  });
});
