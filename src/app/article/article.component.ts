import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../shared/services/article.service';
import {Article} from '../shared/article.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'my-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public articles: Article[];

  constructor(
      private _router: Router,
      private _articleService: ArticleService) { }

  getArticles(): void {
    this._articleService.loadArticles().then(articles => this.articles = articles);
  }

  ngOnInit() {
    this.getArticles();
  }

  gotoDetail(article: Article): void {
    let link = ['/article-detail', article.id];
    this._router.navigate(link);
  }

}
