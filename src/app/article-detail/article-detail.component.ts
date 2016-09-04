import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../shared/services/article.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Article} from '../shared/article.interface';

@Component({
  selector: 'my-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  providers: [ArticleService]
})
export class ArticleDetailComponent implements OnInit {
  article: Article;

  constructor(
      private _articleService: ArticleService,
      private _route: ActivatedRoute,
      private _router: Router,
  ) { }

  ngOnInit(): void {
    this._route.params.forEach((params: Params) => {
      let id = +params['id'];
      this._articleService.getArticle(id)
          .then(article => this.article = article);
    });
  }

  gotoNext(article: Article): void {
    let link = ['/article-detail', article.id+1];
    this._router.navigate(link);
  }

  gotoPrevious(article: Article): void {
    let link = ['/article-detail', article.id-1];
    this._router.navigate(link);
  }

}
