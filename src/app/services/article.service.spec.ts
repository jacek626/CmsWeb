import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientTestingModule, HttpClientModule]
    });
    service = TestBed.inject(ArticleService);
  });

 // httpClient = TestBed.get(HttpClient);
 // httpClient = TestBed.get(HttpClient);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should download articles', () => {
    expect(service.getArticles.length).toBeGreaterThan(0);
  });
});
