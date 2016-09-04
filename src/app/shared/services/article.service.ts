import { Article } from '../article.interface';
import { Injectable } from '@angular/core';
import { ARTICLES } from './mock-articles';
import { Http, Response } from '@angular/http';

@Injectable()
export class ArticleService {

    constructor(private http: Http) {
    }

    loadArticles(): Promise<Article[]> {
        return this.http.get('https://s3.amazonaws.com/mbgd/feed/prod-test-7fc12640-6f09-4461-b683-3e55acdfd4f4.json')
            .toPromise()
            .then(response => this.extractData(response) as Article[])
            .catch(this.handleError);
    }

    getArticle(id: number): Promise<Article> {
        return this.loadArticles()
            .then(articles => articles.find(article => article.id === id));
    }

    private extractData(res: Response) {
        let data = res.json();
        let articles: Article[] = [];
        let idx = 1;

        for(let i=0; i<data.length; i++){
            let article: Article = {
                id: idx,
                title: data[i]['title'],
                articleId: parseInt(data[i]['id']), // no error thrown for wrong data-type? thanks typescript
                publishDate: new Date(data[i]['publishDate']),
                lastUpdate: new Date(data[i]['lastUpdate']),
                body: data[i]['body'],
                author: data[i]['author'],
                image: data[i]['image']
            };
            articles.push(article);
            idx++;
        }
        return articles;
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

}
