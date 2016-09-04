import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../shared/services/article.service';
import { ActivatedRoute, Params } from '@angular/router';
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
      private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.forEach((params: Params) => {
      let id = +params['id'];
      this._articleService.getArticle(id)
          // .then(article => console.log("article>> "+ article));
          .then(article => this.article = article);
    });
  }

}
